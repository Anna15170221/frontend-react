import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SEO from '../components/SEO'

export async function getServerSideProps(context) {
  const { locale } = context
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    }
  }
}

export default function Advertise() {
  return (
    <>
      <SEO
        title="Advertise on Bithomp"
        description="Reach thousands of XRPL users"
      />
      <div className="content-text">
      <h1 className='center'> Win 200 XRP from Bithomp</h1>
        <p>Hi, Friends!</p>

<p>Do you use Bithomp? Do you like contests? Do you want to <strong>WIN 200 XRP?</strong></p>
<p>Let’s do it!</p>
<p>Just three steps:</p>
<p> <strong>1. Follow us and tag us on any of the social networks mentioned below:</strong></p>
<p><strong><a href='https://twitter.com/bithomp'>Twitter</a></strong></p> 
<p><strong><a href='https://www.instagram.com/bithomp/'>Instagram</a></strong></p>
<p><strong><a href='https://www.tiktok.com/@bithomp'>TikTok</a></strong></p>
<p><strong><a href='https://www.linkedin.com/company/bithomp'>Linkedin</a></strong></p>
<p><strong>2. Create the post “HOW I USE BITHOMP”.</strong></p>
Just share your experience, thoughts and insights from using our services. Tell everyone what you like and which features you use more often.
<p>You are welcome to suggest ways we can improve our project and identify any areas you think are missing.</p>
<p><strong>3. Tag your post with #BithompContest. </strong></p>
<p> <strong>Deadline is May 10, 2024, 9 GMT.</strong></p>
<p>Please note, your post can be in any format you prefer, such as text, video, image, GIF, or any other.
Feel free to make it funny, serious, thought-provoking, tearful or whatever you wish it to be. However, it must not contain any violations or insults.</p>
<p><strong>The winner will be chosen by the Bithomp team on May 12, 2024 and announced on all the aforementioned social networks at 3 GMT.</strong></p>
<p>We will choose the most interesting and useful post, also considering the number of likes and reposts it receives during the competition.</p>
<p>Don't forget to follow, tag us and put the <strong>#BithompContest</strong> tag!</p>
Let the contest begin! Good luck!   
      
      </div>
    </>
  )
}
