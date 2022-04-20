import { FIREBASE_URL } from "./api_urls";


const fetchMeetups = async () => {
    console.log(process.env.FIREBASE_URL);
    const response = await fetch(FIREBASE_URL);
    const meetups = await response.json();
    return meetups;
}

export const getAllMeetups = async () => {
    const meetups = await fetchMeetups();
    const meetupsArray = Object.keys(meetups).map(key => {
      const meetup = meetups[key];
      return {
        ...meetup,
        id: key
      }
    })
    return meetupsArray;
}

export const getMeetupById = async (id) => {
    const meetups = await fetchMeetups();
    return {
        ...meetups[id],
        id
    }
}

export const getMeetupsPaths = async () => {
    const meetups = await fetchMeetups();
    return Object.keys(meetups);
} 
