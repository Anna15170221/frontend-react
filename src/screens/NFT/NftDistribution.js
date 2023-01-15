import { useTranslation, Trans } from 'react-i18next';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import SEO from '../../components/SEO';
import SearchBlock from '../../components/SearchBlock';

import { onFailedRequest } from '../../utils';
import { nftsExplorerLink, addressUsernameOrServiceLink } from '../../utils/format';

export default function NftDistribution() {
  const { t } = useTranslation();
  const { id } = useParams();

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [userData, setUserData] = useState({});

  const checkApi = async () => {
    if (!id) {
      return;
    }
    /*
      {
        "issuer": "rDANq225BqjoyiFPXGcpBTzFdQTnn6aK6z",
        "issuerDetails": {
          "username": "Junkies",
          "service": "Junkies"
        },
        "list": "owners",
        "totalNfts": 4730,
        "totalOwners": 996,
        "owners": [
          {
            "owner": "rDANq225BqjoyiFPXGcpBTzFdQTnn6aK6z",
            "ownerDetails": {
              "username": "Junkies",
              "service": "Junkies"
            },
            "count": 500
          },
      */
    const response = await axios('v2/nft-count/' + id + '?list=owners').catch(error => {
      onFailedRequest(error, setErrorMessage);
    });
    setLoading(false);
    const newdata = response?.data;
    if (newdata) {
      if (newdata.issuer) {
        setUserData({
          username: newdata.issuerDetails.username,
          service: newdata.issuerDetails.service,
          address: newdata.issuer
        });

        if (newdata.owners.length > 0) {
          setErrorMessage("");
          setData(newdata);
        } else {
          setErrorMessage(t("explorer.nft-distribution.no-nfts"));
        }
      } else {
        if (newdata.error) {
          setErrorMessage(newdata.error);
        } else {
          setErrorMessage("Error");
          console.log(newdata);
        }
      }
    }
  }

  useEffect(() => {
    checkApi();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return <>
    <SEO title={t("menu.nft-distribution") + " " + id} />
    <SearchBlock
      searchPlaceholderText={t("explorer.enter-address")}
      userData={userData}
      tab="nft-distribution"
    />
    <div className="content-text" style={{ marginTop: "20px" }}>
      {data?.totalNfts &&
        <p className='center'>
          <Trans i18nKey="nft-distribution.text0" values={{ users: data.totalOwners, nfts: data.totalNfts }}>
            {data.totalOwners} users own {data.totalNfts} NFTs
          </Trans>
        </p>
      }
      {id ?
        <table className={"table-large" + (window.innerWidth < 640 ? "" : " shrink")}>
          <thead>
            <tr>
              <th className='center'>{t("table.index")}</th>
              <th className='center'>{t("table.count")}</th>
              <th>{t("table.owner")}</th>
              <th className='center'>{t("table.nfts")}</th>
            </tr>
          </thead>
          <tbody>
            {loading ?
              <tr className='center'><td colSpan="9"><span className="waiting"></span></td></tr>
              :
              <>
                {!errorMessage ? data.owners?.map((user, i) =>
                  <tr key={i}>
                    <td className="center">{i + 1}</td>
                    <td className='center'>{user.count}</td>
                    <td>{addressUsernameOrServiceLink({ owner: user.owner, ownerDetails: user.ownerDetails }, 'owner', { short: (window.innerWidth < 640) })}</td>
                    <td className='center'>
                      {
                        nftsExplorerLink(
                          {
                            owner: user.owner,
                            ownerDetails: user.ownerDetails,
                            issuer: data.issuer,
                            issuerDetails: data.issuerDetails
                          }
                        )
                      }
                    </td>
                  </tr>)
                  :
                  <tr><td colSpan="100" className='center orange bold'>{errorMessage}</td></tr>
                }
              </>
            }
          </tbody>
        </table>
        :
        <>
          <h2 className='center'>{t("menu.nft-distribution")}</h2>
          <p className='center'>
            {t("explorer.nft-distribution.desc")}
          </p>
        </>
      }
    </div>
  </>;
};