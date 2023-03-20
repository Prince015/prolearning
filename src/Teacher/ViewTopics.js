import axios from 'axios'
import React, { useEffect, useState } from 'react'

function ViewTopics() {

    const [topic, setTopic] = useState([])

    const getTopics = async () => {
        let url = "https://hilarious-veil-wasp.cyclic.app/topic/maintopic"
        console.log(url)
        axios.get(url, {
          headers: {
            // "Content-Type": "application/json",
            authToken: localStorage.getItem('authToken')
          }
        })
          .then((results) => results)
          .then((data) => {
            console.log(data?.data)
            // console.log("data", data);
          });
      }

      useEffect(() => {
        getTopics()
      }, [])
      

  return (
    <div>

    </div>
  )
}

export default ViewTopics