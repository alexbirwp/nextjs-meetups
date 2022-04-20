import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetup = () => {
    const router = useRouter();
    const addMeetupHandler = async (data) => {
        console.log(data);
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const newdata = await response.json();
        router.push('/');
    }
    return <NewMeetupForm onAddMeetup={addMeetupHandler}></NewMeetupForm>
};


export default NewMeetup;