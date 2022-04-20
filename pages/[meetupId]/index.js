import Head from "next/head";
import { DUMMY_MEETUPS } from "..";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import { getMeetupById, getMeetupsPaths } from "../../helpers/fetchdata";

const MetupDetails = ({meetUpData}) => {
    return (
        <>
            <Head>
                <title>{meetUpData.title}</title>
                <meta name="description" content={meetUpData.description} />
            </Head>
            <MeetupDetail
                image={meetUpData.image}
                title={meetUpData.title}
                address={meetUpData.address}
                description={meetUpData.description}
            />
        </>
    );
};

export async function getStaticPaths() {
    const ids = await getMeetupsPaths();
    const paths = ids.map(id => ({params: {meetupId: id}}))
    return {
        fallback: false,
        paths
    }
}

export async function getStaticProps(context) {
    const meetUp = await getMeetupById(context.params.meetupId);
    return {
        props: {
            meetUpData: {
                ...meetUp
            }
        }
    }
}

export default MetupDetails;