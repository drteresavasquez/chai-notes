import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getSaved } from '../../api/firebaseCalls';
import ChatCard from '../../components/ChatCard';

export default function UserSaved() {
  const [saved, setSaved] = useState([]);

  const router = useRouter();
  const { uid } = router.query;

  useEffect(() => {
    getSaved(uid)
      .then(setSaved);
  }, []);

  return (
    <>
      {
        saved.map(((item) => <ChatCard key={item.firebaseKey} input={item.input} response={item.response} />))
      }
    </>
  );
}
