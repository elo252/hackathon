import React from 'react'
import './Landing.css'
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import landingScreenImg from './img.jpg';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function Landing() {
  return (
    <div className='landingContainer'>
         <div className="nav-bar">
                <div className="logo"> FindIn </div>
                <div className="headers">
                {/* <Link to="/explore" className="title"><h3 className="explore_button">Explore<FontAwesomeIcon icon={faCaretDown} color="black" className="explore_icon"/></h3></Link> */}
                    <Link to="/login" className="title"> <button className="login_button">Login</button> </Link>  
                    <Link to="/signup" className="title"> <button className="signup_button" >Signup</button> </Link> 
                </div>
            </div>
      <div className="landingImg">
        <div className="overlay">
          <img src={landingScreenImg} className='landingScreenImg' />
        </div>
      </div>
      <div className="SearchBar">
        <form className='searchForm'>
          <Paper
            component="form"
            sx={{ mt:-25, display: 'flex', alignItems: 'center',justifyContent:'center', width: 400 , overflow:"hidden" }}
          >

            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Discover the world"
              inputProps={{ 'aria-label': 'Locate nearby charging stations..' }}
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
            </IconButton>

          </Paper>

        </form>
      </div>
    </div>
  )
}

export default Landing

