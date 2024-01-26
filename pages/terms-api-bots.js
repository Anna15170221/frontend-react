import Mailto from 'react-protected-mailto'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import SEO from '../components/SEO'
import { useTranslation } from 'next-i18next'

export async function getServerSideProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}

export default function TermsBotsAndApi() {
  const { t } = useTranslation()

  return (
    <>
      <SEO
        title={t("menu.terms-and-conditions")}
        noindex={true}
      />
      <div className="content-text">
        <h1>API & Bots Terms of Use</h1>
  
        <p>Please read these terms and conditions carefully before using Our Service.</p>
    
        <h2> 1. Acceptance</h2>

       <p>The Bithomp API, as outlined below, is provided by Bithomp AB ("Bithomp," "Company," "we," "us," or "our"). If you intend to utilize our Bithomp API, it is essential that you fully accept all the terms and conditions outlined in this Bithomp API Terms of Service ("API Terms"). Before commencing the use of our Bithomp API, it is imperative that you thoroughly read and agree to our API Terms. By accessing or using our Bithomp API, you are expressing your full and legal agreement to abide by all the provisions within these API Terms, in addition to our <a href={'/privacy-policy'}>Privacy policy</a> and <a href={'/terms-and-conditions'}>Terms and Conditions</a>, the terms of which are integrated herein by reference. </p>

        <p>In the event that you are using our Bithomp API on behalf of a corporation, partnership, or other legal entity, you confirm that you have the proper authorization to represent and legally bind such entity to the API Terms. In such cases, any references to "you" or "your" in these API Terms also apply to the represented entity. If you lack the aforementioned authority or if you (or the entity you represent) do not agree with any terms in these API Terms, our <a href={'/privacy-policy'}>Privacy policy</a>, and/or <a href={'/terms-and-conditions'}>Terms and Conditions</a>, you are not permitted to use the Bithomp API.</p>

        <p>As a user of the Bithomp API, you acknowledge and accept that the API Terms, along with our <a href={'/privacy-policy'}>Privacy policy</a> and <a href={'/terms-and-conditions'}>Terms and Conditions</a>, form a legally binding contract between Bithomp and yourself. This agreement holds true even though it is in electronic form and does not necessitate physical signing or online acknowledgment, governing your use of our Bithomp API.</p>
        
        
        
        <h2> 2. Definitions</h2>

        <p></p> 2.1 The term "Application" or "App" refers to any software, mobile application, website, product, or service developed, created, or offered using our Bithomp API.

<p></p>2.2 "API Documentation" pertains to the documentation, data, and information provided by Bithomp regarding the use of our Bithomp API through our API Site.

<p></p>2.3 "API Site" denotes our API development site located <a href={'/admin'}>HERE</a>

<p></p>2.4 "Bithomp API" encompasses the Application Programming Interface ("API") publicly offered by our Company, along with the associated API Documentation.

<p></p>2.5 The "Bithomp Brand" includes the "BITHOMP" brand name and other branding elements, names, logos, slogans, service marks, trademarks, and trade names owned by Bithomp.

<p></p>2.6 "Data" covers (i) any data and content uploaded, posted, transmitted, or otherwise made available by Bithomp on its website www.bithomp.com or other associated platforms (including information related to listed digital coins, cryptocurrency market data, additional statistics, initial coin offerings data, and coin searches); and (ii) in cases where Bithomp provides interactive channels for user engagement, any data, content, comments, profile information, and messages uploaded, posted, or transmitted by other users through such channels.

<p></p>2.7 "Service(s)" encompasses Bithomp’s products and services, including but not limited to the Bithomp API, its website www.bithomp.com (the "Site"), and all software, applications, mobile applications, data, reports, text, images, messaging channels, message services, updates, content, newsletters, price alerts, merchandise, databases, forums, articles, guides, reports, and other information made available by or on behalf of Bithomp through any of the aforementioned. The term "Service" excludes information, software applications, mobile applications, platforms, websites, or services provided by you or a third party (including Applications), whether or not the Bithomp API is incorporated into your product or a third party's services or product, and regardless of whether Bithomp designates them as "official integrations."

<p></p>2.8 "Users" includes all individuals utilizing our Bithomp API, which encompasses you.

<h2> 3. Grant of License</h2>
<p></p>3.1 In accordance with the terms outlined in these API Terms, Bithomp grants you a limited, non-exclusive, non-assignable, non-transferable, and irrevocable license to utilize the Bithomp API for the development, testing, and support of any software application, mobile application, website, platform, service, or product. This license also extends to the integration or incorporation of the Bithomp API into your Application. It is important to note that this license is subject to the restrictions specified in Section 4 and Section 9 below. Any violation of Section 4 will result in the automatic termination of the granted license, and Bithomp holds no liability in such termination. Consequently, Bithomp reserves the right to immediately suspend, obstruct, restrict, or terminate your access to and/or use of your account and/or Bithomp API without notice or liability to you. This action is without prejudice to any other remedies available to Bithomp in law, contract, tort, or equity.
<p></p>3.2 Your use of the Bithomp API is contingent upon your ongoing compliance with the provisions outlined in these API Terms. In order to enhance the development of our Bithomp API, Applications, Data, Services, platforms, channels, and/or products (referred to individually and collectively as "our Property"), we retain the right to make changes to the Bithomp API and/or these API Terms at any time without notifying you. It is your responsibility to regularly check our <a href={'/admin'}>SITE</a> for updates to the Bithomp API and/or these API Terms. Additionally, certain aspects, events, methods, and properties of our Bithomp API may be undocumented. Considering the potential changes to our Bithomp API (whether documented or not), Applications, Data, Services, platforms, channels, and/or products at any time, you agree not to rely on any function, behavior, capability, or other aspects of our Bithomp API.
<h2>4. Scope of Use</h2>
<p>4.1 Your utilization of Bithomp’s API is subject to the following limitations:</p>
<p>4.1.1 The extent of use permitted by our license is contingent upon the usage plan you select, as outlined in each plan's corresponding description available at <a href='https://docs.bithomp.com/#price-and-limits'>Price and Limits</a>. If you opt for one of our paid usage plans, the license will encompass the designated use specified in the description under your selected paid plan, provided you adhere to timely payment of the applicable fees. Regardless of the chosen usage plan, continuous compliance with the provisions in these API Terms is required to retain access to the Bithomp API.
</p>
<p>4.1.2 Our Property, including but not limited to the Bithomp API, must not be used in violation of any applicable laws or regulations, or to infringe upon the rights of individuals or entities. This includes usage that aids in the infringement of third-party intellectual property rights, privacy rights, or any actions inconsistent with these API Terms, our Privacy Policy, Terms and Conditions, and/or any other agreements with Bithomp to which you are subject (including, without limitation, any Executed Agreements as defined in Clause 11.3 below).</p>
<p>4.1.3 The Bithomp API (and our other Property, if licensed to you herein) should not be used to access or utilize information beyond the limits specified in these API Terms (and/or Executed Agreements, if applicable) or the API Documentation. It must not change any aspect of, disrupt, interfere with, or degrade the performance of the Services, or circumvent any of Bithomp’s security measures, operational, administrative, or technical procedures. Attempting to hack or test the vulnerability of our Services, Bithomp API, or our systems and/or networks is strictly prohibited.
</p>
<p>4.1.4 You agree not to introduce, either directly or indirectly, worms, trojans, viruses, hacks, or other computer programs that may damage, interfere with, interrupt, intercept, phish, data mine, or expropriate any system or data (including but not limited to the Data, Bithomp API, and our Services) to or from any of our Property and associated networks, nor attempt any of the aforementioned.</p>
<p>4.1.5 Reverse engineering or deriving source codes, trade secrets, or know-how from any of our Property (including but not limited to the Bithomp API) or any portion thereof is strictly prohibited. Any attempts to do so, either directly or indirectly, or assisting others in such attempts, are also forbidden.</p>
<p>4.1.6 While you have the right to charge for your services and products incorporating or integrating our Bithomp API, selling, renting, leasing, sublicensing, redistributing, or syndicating access to the Bithomp API or any part thereof is not permitted unless pursuant to the terms of an Executed Agreement with Bithomp.</p>
<p>4.1.7 You have the right to place advertisements on and around your products, services, website, platforms, mobile applications, and software applications ("your Products") that incorporate or integrate our Bithomp API. However, certain restrictions apply, including not placing advertisements on any of our Property and ensuring that advertisements on or around your Products do not resemble or be reasonably likely to confuse them with belonging to Bithomp or being associated with Bithomp's products or services.
</p>
<p>4.1.7.1 You must not use the Bithomp API to promote gambling, and any advertisements around your Products incorporating or integrating the Bithomp API must not constitute adult/sexual content or offer online gambling.
</p>
<p>4.1.7.2 Using any Data, information, or other content from any of our Property in advertisements or for targeting advertisements in your Products or any part thereof is prohibited.
</p>
<p>4.1.7.3 Using any contact information obtained from our Property or any contact information of other Users (including email addresses) to contact Users without the prior written consent of Bithomp and the owners of such contact information is not allowed.
</p>
<p>4.1.7.4 Your Products and associated analyses or research must not isolate a small group of individuals or any single individual for any unlawful, harassing, or discriminatory purposes.
</p>
<p>4.1.7.5 Making public statements or representations in any mode, media, or channel regarding Bithomp or any of our Products (including the Bithomp API) without our prior written consent is prohibited.
</p>
<p>4.1.8 You acknowledge that Bithomp may offer products, services, or other Applications in the future that are similar to your offerings, and you agree that Bithomp is fully entitled to do so without any restrictions or notice to you.</p>
<p>4.2 The rate limit for the Bithomp API is available at <a href='https://docs.bithomp.com/#price-and-limits'>Price and Limits</a>, although Bithomp reserves the right to change this rate limit at any time at its sole discretion without notice or reference to you or any Users. You agree not to exceed or circumvent the specified rate limitation, limitations on calls, and use of the Bithomp API, as may be implemented by Bithomp from time to time at its sole discretion. Additionally, using the Bithomp API in a manner that may exceed reasonable request volume, constitute excessive or abusive usage, or fail to comply with any part of these API Terms, the API Documentation, our Privacy Policy, Terms and Conditions, or the limitations of your selected usage plan is strictly prohibited. Each Crypto Data API Plan listed on <a href='https://docs.bithomp.com/#price-and-limits'>Price and Limits</a> provides a specified number of call credits for your use each month ("Monthly Call Limit"). If you exceed your Monthly Call Limit for your subscribed plan in any given month, an additional charge per exceeded call will be levied.</p>
<h2>5. Payment Terms</h2>
<p>5.1 As per Clause 4.1.1 above, if you opt for any fee-based Bithomp Crypto Data API Plans, payment must be executed promptly. Check <a href={'/admin'}>Partner Portal</a> for the payment details. All payments are required to be made in advance, with the deadline being no later than three (3) days before the start date of your usage plan and each subsequent recurring billing cycle. These payments are non-refundable, whether in full or in part. Bithomp retains the right to obstruct, restrict, limit, and/or suspend (without any liability to you) all access to and usage of the Bithomp API until all applicable fees are settled. In cases of suspension due to delayed payment, there will be no extension to your subscription period, which will still expire as calculated from the start date of your usage plan. Furthermore, Bithomp has the authority to charge late payment interest at a rate of 12% per annum for each day of delayed payment. Bithomp also reserves the right to terminate your account/use of the Bithomp API without notice, without any liability to you, and without prejudicing Bithomp’s rights to any other available remedies in law, contract, tort, or equity.</p>
<p>5.2 You are accountable for all bank transfer charges, currency conversion losses, and any other associated administrative fees incurred in making your payment. Additionally, you are responsible for all taxes arising in relation to your payment for the services, including withholding tax, Goods and Services Tax, Value Added Tax, and any other levies ("Taxes"). You are also fully responsible for any currency losses and payment service provider charges incurred in your payment to Bithomp. We reserve the right, at our sole discretion, to denominate our fees in any currency, determine the acceptable mode of payment, and utilize any payment service network or providers for the payment of our fees and/or applicable taxes.
</p>
<p>5.3 If your failure to pay any Taxes exposes Bithomp to potential tax liabilities, you agree to fully indemnify and hold harmless Bithomp against all costs, claims, and damages, including penalties, settlement amounts, and legal fees (on a solicitor-client basis).</p>
<p></p>5.4 For online payments, you consent to the use, disclosure, transfer, retention, and processing of your personal data as necessary or relevant for payment processing. This includes the disclosure of your personal data to the payment portal operator, acquirer, credit card association, credit card issuer, and other relevant third parties, as well as the transfer of your personal data outside of your country.
<h2>6. Data Caching and Storage</h2>

<p>6.1 While we do not actively promote the caching or storage of Data, if you find it necessary to cache or store Data:</p>
<p></p> 6.1.1 You are required to refresh the cache at least every 24 hours.
<p></p>6.1.2 Implement strong encryption and other security measures to safeguard the stored Data.
<p></p>6.1.3 Upon a User's request to delete all User Data collected as a result of the User utilizing our Bithomp API (whether as part of your Product or otherwise, or when our Bithomp API facilitates the collection of such User Data), you must promptly delete all such User Data unless retention is necessary for legitimate legal or business purposes, such as ongoing contractual obligations with the User.
<p></p>6.1.4 If Bithomp terminates your access to or use of the Bithomp API (regardless of the reasons), you agree to promptly and permanently delete all Data and any other information stored as a result of your use of or access to the Bithomp API. No copies should be retained unless required by applicable law.
<p></p>6.2 Unless expressly permitted under these API Terms, you are not authorized to duplicate, reproduce, copy, store, derive from, or translate any Data, API Documentation, or information expressed by the Data (including but not limited to hashed or transferred data).

<h2>7. User Agreement for your Products</h2>
<p>In the event that any your Products are offered for use to others outside your entity, you agree that you will have in place a binding user agreement and privacy policy which must at the very least: (a) identify the Bithomp API as being the property of Bithomp; (b) ensure that your users/customers abide by this API Terms in using the Bithomp API (whether as part of our Products or otherwise); (c) exclude and disclaim all liability of Bithomp for all usage of the Bithomp API (or part thereof); (d) stipulate your assumption of full responsibility and liability for offering the Bithomp API as part of your Products to your users/customers; (e) set out clearly in your easily accessible privacy policy your purpose and methods for collection, storage, use, processing, disclosure and transfer of personal data of your users in accordance with privacy and data protection laws applicable to you, in no event to be less stringent than the requirements thereunder our <a href={'/privacy-policy'}>Privacy policy</a> .
</p>

<h2>8. Security Measures</h2>

<p> You commit to implementing stringent and robust security systems to safeguard your network, operating system, servers, databases, computers, user information, personal data, and other components integral to, supporting, or constituting your Products that integrate, incorporate, or in any way utilize the Bithomp API ("your Systems"). Should any compromise occur in any of your Systems, whether through hacking, unauthorized use or access, or other security breaches, you are required to promptly notify us via email at support@bithomp.com. We reserve the sole discretion to determine whether to terminate your access to and/or use of our Bithomp API, as such security breaches may have an adverse effect on our reputation (evaluated at our sole discretion, and we are not obliged to provide reasons for our decision). If we decide to terminate your access to or use of our Bithomp API, you are obligated to comply immediately with the clauses outlined in Section 10.
</p>
<h2>9. Ownership</h2>
<p>9.1 All assets, rights, title, and interest in and to our Bithomp Brand, API Documentation, Bithomp API, and other Property (including but not limited to intellectual property rights) are fully owned by Bithomp. Your usage of our Property grants you only a limited license as outlined in these API Terms, and no other rights, title, interest, ownership, or property of any kind are transferred to you through your use of our Property. It is clarified that any inventions you create that incorporate our Bithomp API do not transfer any ownership or interest in our Bithomp API to you, even though you may be considered the owner of such inventions under applicable law (excluding the Bithomp API). Additionally, you agree to undertake any necessary acts and execute documents (without compensation) as Bithomp may request from you periodically to perfect Bithomp’s rights to our Property.
</p>
<h2>10. Termination </h2>
<p>10.1 These API Terms become effective on the date you agree to them or access or use the Bithomp API, whichever occurs first, and will remain in force until terminated by Bithomp or you in accordance with the provisions of these API Terms.</p>
<p>10.2 You have the option to terminate your binding to these API Terms by discontinuing your access to and/or use of our Bithomp API and notifying us via email at <Mailto email='support@bithomp.com' headers={{ subject: 'API & Bots Terms of Use' }} />.</p>
<p>10.3 We reserve the right to vary, amend, change, suspend, or discontinue the provision of any of our Property, including but not limited to the Bithomp API, and to suspend or terminate your use of the Bithomp API and/or the Bithomp Brand at any time without notice or providing reasons to you. Without prejudice to the foregoing, we may, at our discretion, restrict your access to or use of our Bithomp API if we determine, in our sole discretion, that your access to or use of our Bithomp API may negatively impact our Products or Services.</p>
<p>10.4 Upon termination of these API Terms:</p>
<p>10.4.1 All rights and licenses granted to you will immediately cease and terminate.</p>
<p>10.4.2 You are obligated to promptly destroy the API Documentation, Data, and any other information obtained from Bithomp or any of our Property that may be in your possession or control.</p>
<p>10.4.3 Unless we specifically grant prior written consent, or as otherwise stated in these API Terms, you must promptly and permanently delete all Data and other information obtained from or related to Bithomp and any of our Property that you have stored in connection with your access to or use of the Bithomp API. You agree to provide written certification of the destruction of stored Data and information if Bithomp requests such certification from you.</p>
<h2>11. Your Warranties</h2>

<p>11.1 By agreeing to this API Terms, you assert and guarantee to Bithomp that you (including any entity you represent) have the capacity to enter into and be fully bound by this API Terms. Additionally, you affirm your ability to use the Bithomp API in compliance with this API Terms without violating any applicable laws or regulations, infringing upon any third party’s rights (including intellectual property rights), or breaching any other contracts to which you are bound.</p>
<p>11.2 Without limiting the scope of the clauses under Section 11, you warrant and undertake (and shall ensure the same undertaking from any entity you represent) not to initiate any legal actions or make any claims against Bithomp for damages, expenses, or losses resulting from your use of (or inability to use) any of our Property (including the Bithomp API). You acknowledge that Bithomp may amend this API Terms and/or modify any aspect or function of the Bithomp API without notice or reference to you, potentially affecting your usage, products, or associated business. In such cases, your only recourse is to terminate your use of the Bithomp API, and you agree not to make any claims against Bithomp. Your continued access or use of the Bithomp API or any of our Property constitutes acceptance and agreement to all amendments and modifications. The effective date of the latest version of this API Terms is indicated at the top of the document.</p>


<h1> Bots Terms of Use</h1>
<h2>1. General Provisions</h2>

<p>1.1. Users can register on the Platform by visiting <a href={'/admin'}>Partner Portal</a>.</p>
<p></p>1.2. The administration may, at its discretion, employ additional registration procedures, including Recaptcha V3 ("CAPTCHA").
<p></p>1.3. After registration, users receive a unique Account and access to the Dashboard.
<p></p>1.4. All activities conducted in the Dashboard are considered the personal actions of the user. The user bears sole responsibility for any actions taken using their Account and the consequences that may arise from such use.
<p></p>1.5. Users are exclusively responsible for:
<p></p>a) Safeguarding their username and password.
<p></p>b) Dealing with the consequences in case of loss and/or disclosure of login and password to third parties.
<p></p>1.6. Users are obligated to take appropriate measures independently to secure their Account and prevent unauthorized access by third parties. This includes ensuring that the password is not saved in the browser, even when utilizing cookie technology, especially when a third party has access to the user's computer or mobile device.
<p></p>1.7. Users are not permitted to transfer their Account data to third parties. If Account data is transferred, users bear full responsibility for the actions conducted by third parties using the user's Account.


<h2>2. Terms of Use</h2>
<p></p>2.1. The Administration is not obligated to provide consulting and technical support to the User.

<p></p>2.2. The Platform is integrated with various services, such as analytics, payment, and mailing services. The Platform solely facilitates access to these services. The relationship between the User and the service provider using the Platform (service owner) is governed by the service documents (agreement, rules of use, etc.), and all matters related to the use of such services are independently resolved between the service owner and the User.

<p></p>2.3. The Platform and services are provided on an "as-is" basis.

<p></p>2.4. The User assumes all risks associated with the use of the Platform and services.

<p></p>2.5. The Administration is not responsible for:
   <p></p>a) The inability to use the Platform for reasons beyond the control of the Administration.
   <p></p>b) Any acts and/or omissions of service providers, services, networks, software, or equipment.
   <p></p>c) Distortion, alteration, or loss of Content.
   <p></p>d) Security of the User's login and/or password.
   <p></p>e) Unauthorized and/or unlawful use of the User's login and/or password by third parties.
   <p></p>f) Damage that may be caused to any of the User's devices, media, and/or software as a result of the use of the Platform and/or Services.
   <p></p>g) Consequences of the transfer of Bots between Accounts.
   <p></p>You can contact us with queries, comments, and feedback via email at <Mailto email='support@bithomp.com' headers={{ subject: 'API & Bots Terms of Use' }} />





        </div >
    </>
  )
}
