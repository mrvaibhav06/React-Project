import react,{ useEffect,useState} from 'react'
import {AiOutlineMail} from 'react-icons/ai'
import {CgWebsite} from 'react-icons/cg'
import { BsTelephone } from 'react-icons/bs'

const Resume = ({imageSource, userObject}) => {
    const [skills, setSkills] = useState([]);
    return (
        <div className='resume-card'>
            <div className='resume-card-inner'>
                <div className='section section-1'>
                    <h3 className='full-name'>{userObject.firstName} {userObject.lastName}</h3>
                    <p className='age'>{userObject.age} years old</p>
                    <img className="pfp" alt={`${userObject.firstName}'s profile`} src={imageSource} />
                </div>
                <div className='section section-3'>
                    <h3>Summary</h3>
                    <p className='profile-info'>{userObject.profile}</p>
                </div>
                <div className='section section-2'>
                    <ul>
                        <li className='phoneNumber'> <BsTelephone className='icon'/>{userObject.phoneNumber}</li>
                        <li className='email'> <AiOutlineMail className='icon'/>{userObject.email}</li>
                        {userObject.website ? <li className='website'> <CgWebsite className='icon'/>{userObject.website}</li> : ''}

                    </ul>
                </div>

            </div>
        </div>
    );
}

export default Resume
