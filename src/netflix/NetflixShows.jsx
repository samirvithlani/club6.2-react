import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {

  var shows = [
    {
      id:4,
      name:"money heist"
    },
    {
      id:5,
      name:"the witcher"
    },
    {
      id:6,
      name:"stranger things"
    }
  ]
  return (
    <div>
        <h1>Netflix Shows</h1>
        <ul>
          <li>
            <Link to="/netflix/playshow/1">
              Stranger Things
            </Link>
          </li>
          <li>
            <Link to="/netflix/playshow/2">
              The Witcher
            </Link>
          </li>
          <li>
            <Link to="/netflix/playshow/3">
              The Crown
            </Link>
          </li>
        </ul>

        <ul>
          {
            shows.map((show)=>{
              return(
              <li>    <Link to ={`/netflix/playshow/${show.id}`}>{show.name}</Link></li>
              )
            })
          }
        </ul>
    </div>
  )
}
