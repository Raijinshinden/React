import profilePic from './assets/handsome-man.jpg'

function Card(){
    return(
        <div className="card">
            <img className="profilePic card-image" src={profilePic} alt="profile picture"></img>
            <h2 className='card-title'>Ryan Dempsey</h2>
            <p className='card-text'>I teach English and study how to program</p>
        </div>
    );
}


export default Card