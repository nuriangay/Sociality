import {useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { Slice } from '../store/slice/slice'


const Project = () => {


  const dispatch=useDispatch()

  const {infos} =useSelector(state=>state.data)


  
  useEffect(() => {
   dispatch(Slice({}))
  }, [dispatch])
  return (
  
<div class="background">
      <div className="l-constrained group">
        <div className="col-7">
          <div className="backgroundcolor"><p className='sociality'>sociality.io</p></div>
          <div className="row-6 group">
            <div className="navigation-menu">
            <i className="fa-solid fa-bell shape-1"></i>
              <p className="notifications">NOTIFICATIONS</p>
              <i class="fa-solid fa-crop-simple seemore0"></i>
              <div className="page2 group">
                <div className="icon2">
                  <img className="shape1" src="images/shape1_2.png" alt="" width="13" height="7"/>
                </div>
                <p className="summary">SUMMARY</p>
              
                <i class="fa-solid fa-plus seemore"></i>
              </div>
              <div className="page3 group">
                <div className="row-2 group">
                <i class="fa-solid fa-pen-to-square icon3"></i>
                  <p className="publish">PUBLISH</p>
                </div>
                <div className="row-5 group">
                <i class="fa-solid fa-circle bulleta"></i>
                  <p className="compose">Compose</p>
                </div>
                <i className="fa-solid fa-circle bulleta2"></i>
                <p className="feed">Feed</p>
              </div>
              <div className="page4 group">
              <div className="page6">
                ENGAGE
              </div>
              <i class="fa-solid fa-comment-dots icon4"></i>
                <div className="page6">
                LISTEN
              </div>
              <i class="fa-solid fa-ear-listen icon7"></i>
              <i class="fa-solid fa-plus seemore-2"></i>
              <i class="fa-solid fa-chart-line line"></i>
              <div className="page6">
                REPORT
              </div>
              <i class="fa-solid fa-plus seemore-3"></i>
              
              </div>
              <div className="page5 group">
                
              
                <div className="icon5">
        
                </div>

              </div>
            
            </div>
          </div>
        </div>
        <div className="col-9 group">
          <div className="row-10 group">
            <div className="col-10">
              <div className="descriptions group">
                <div className="color1"></div>
                <p className="published">Published</p>
                <div className="color2"></div>
                <p className="scheduled">Scheduled</p>
                <div className="color3"></div>
                <p className="approval">Need Approval</p>
                <div className="color4"></div>
                <p className="published">Error</p>
                <div className="color5"></div>
                <p className="notes">Notes</p>
              </div>
              <div className="row-3 match-height group">
                <div className={infos?.posts_by_date['2021-06-17'][0].status===3 && 'card-error'}>
                  
                    <h1 className='icon-text'>{infos?.posts_by_date['2021-06-17'][0].published_at}</h1>
                    <div className='icons-div'>
                   
                <i className="fa-solid fa-ban cancel"></i>
                <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>

                    </div>
      
                  <p className="text">{infos.posts_by_date['2021-06-17'][0]?.entry.message}</p>
                  <i className="photomask" src={infos.posts_by_date['2021-06-17'][0]?.entry.image.map((item)=>item)}/>
                
                  <div className="reactions group">
                    
                  <i className="fa-solid fa-thumbs-up likes icon-2"></i>
                    <p className="text-2">0</p>
                    <i className="fa-solid fa-message likes icon-2"></i>
                    <p className="text-3">0</p>
                    <i className="fa-solid fa-share-nodes likes icon-2"></i>
                    <p className="text-3">0</p>
                    <i className="fa-solid fa-eye likes icon-2"></i>
                    <p className="text-3">0</p>
                  </div>
                </div>
                <div className={infos?.posts_by_date['2021-06-17'][0]?.status===3 && 'card-error2 group'}>
                   
                <h1 className='icon-text2'>{infos?.posts_by_date['2021-06-17'][1]?.published_at}</h1>
                    <div className='icons-div'>
                   
                    <i className="fa-solid fa-check cancel"></i>
                <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>

                    </div>
      
              
                  <p className="text-4">{infos.posts_by_date['2021-06-17'][1]?.entry.message}</p>
                  <div className="row-4 group">
                    
                    
                  <i className=" twitter-logo2"></i>
                    <div className="photomask-2"></div>
                  </div>
                  <div className="reactions-2 group">
                  <i className="fa-solid fa-heart likes icon-2 "></i>
                    <p className="text-2">124</p>
                    <i className="fa-solid fa-recycle likes icon-2 "></i>
                    <p className="text-3">63</p>
                    <i className="fa-solid fa-message likes icon-2"></i>
                    <p className="text-3">4</p>
                    <i className="fa-solid fa-eye likes icon-2"></i>
                    <p className="text-3">1426</p>
                  </div>
                </div>
              </div>
              <p className="text-7">12 January 2016</p>
            </div>
            <div className="mask"></div>
          </div>
          <div className="row match-height group">
         
            <div className="card3">
            <h1 className='icon-text3'>{infos.posts_by_date['2021-06-17'][2]?.published_at}</h1>
            <div className='card-icons'>
            <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>
            </div>
            
              <p className="text-8">{infos.posts_by_date['2021-06-17'][2]?.entry.message}<span class="color71bcf0">http://bit.ly/145HD7S</span></p>
              <div className="photomask-3"></div>
              <div className="reactions group">
                    <i className="fa-solid fa-heart likes icon-2"></i>
                    <p className="text-2">124</p>
                    <i className="fa-solid fa-recycle likes icon-2"></i>
                    <p className="text-3">63</p>
                    <i className="fa-solid fa-message likes icon-2"></i>
                    <p className="text-3">4</p>
                    <i className="fa-solid fa-eye likes icon-2"></i>
                    <p className="text-3">1426</p>
              </div>
            </div>
            <div className={infos?.posts_by_date['2021-07-01' ][0]?.status===1 && 'card4 group'}>
            <i class="fa-brands fa-facebook-f face-icon3"></i>
            <h1 className='icon-text3'>{infos.posts_by_date['2021-07-01'][0]?.published_at}</h1>
            <div className='card-icons2'>
            <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>
            </div>
              <p className="text-10">{infos.posts_by_date['2021-07-01'][0]?.entry.message} <span class="color71bcf0">http://bit.ly/145HD7S</span></p>
              <div className="photomask-4"></div>
              <div className="reactions group">
              <i className="fa-solid fa-thumbs-up likes icon-2"></i>
                    <p className="text-2">124</p>
                    <i className="fa-solid fa-message likes icon-2"></i>
                    <p className="text-3">63</p>
                    <i className="fa-solid fa-share-nodes likes icon-2"></i>
                    <p className="text-3">4</p>
                    <i className="fa-solid fa-eye likes icon-2"></i>
                    <p className="text-3">1426</p>
              </div>
            </div>
            <div className="card5 group">
            <i className="fa-brands fa-twitter twitter-logo2"></i>
            <h1 className='icon-text3'>{infos.posts_by_date['2021-07-01'][1]?.published_at}</h1>
            <div className='card-icons2'>
            <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>
            </div>
              <div className="photo">
                <p className="text-12">{infos.posts_by_date['2021-07-01'][1]?.entry.message} <span class="color71bcf0">http://bit.ly/145HD7S</span></p>
                <div className="photomask-5"></div>
              </div>
              <div className="reactions group">
              <i className="fa-solid fa-thumbs-up likes icon-2"></i>
                    <p className="text-2">124</p>
                    <i className="fa-solid fa-message likes icon-2"></i>
                    <p className="text-3">63</p>
                    <i className="fa-solid fa-share-nodes likes icon-2"></i>
                    <p className="text-3">4</p>
                    <i className="fa-solid fa-eye likes icon-2"></i>
                    <p className="text-3">1426</p>
              </div>
            </div>
          </div>
          <p className="text-13">10 January 2016</p>
          <div className="card6">
          <h1 className='icon-text3'>10 January 2016-14:30</h1>
          <div className='card-icons3'>
            <i className="fa-solid fa-trash-can trash"></i>
                <i className="fa-solid fa-comment-dots comment"></i>
            </div>
            <p className="text-14">Lorem ipsum dolor sit amet, consecteturat<br></br>adipiscing elit, sed do eiusmod.</p>
            <div className="row-7 group">
            <i className="fa-brands fa-facebook-f face-icon2"></i>
              <img className="photomask-6" src="images/photomask_6.jpg" alt="" width="283" height="239"/>
            </div>
            <div className="reactions group">
                <i className="fa-solid fa-thumbs-up likes icon-2"></i>
                <p className="text-2">124</p>
                 <i className="fa-solid fa-message likes icon-2"></i>
                <p className="text-3">63</p>
                <i className="fa-solid fa-share-nodes likes icon-2"></i>
                <p className="text-3">4</p>
                <i className="fa-solid fa-eye likes icon-2"></i>
                <p className="text-3">1426</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  
 
  )
}

export default Project
