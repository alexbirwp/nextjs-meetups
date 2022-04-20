import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { getAllMeetups } from "../helpers/fetchdata";

const HomePage = (props) => {
  return (
    <MeetupList meetups={props.meetups}></MeetupList>
  );
};

//SSR
// export async function getServerSideProps(context) {
//   const req = context.req;
//   const res = context.res;
//   //Some fetching
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     }
//   }
// }

//SSG
export async function getStaticProps() {
  const meetupsArray = await getAllMeetups();
  return {
    props: {
      meetups: meetupsArray
    },
    revalidate: 100
  }
}

export default HomePage;
