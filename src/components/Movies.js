// import React, { Component } from 'react'
// //import { movies } from './getMovies'
// import axios from 'axios';

// export default class Movies extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          hover:"",
//          parr:[1],
//          currPage:1,
//          movies:[],
//       }
//     }
//    async  componentDidMount(){
//       const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`)
//       let data=res.data;
//       //console.log(data);
//       this.setState({
//         movies:[...data.results]
//       })

//       console.log("mounting done ")
//     }
//     changeMovie=async()=>{
//       const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
//       let data=res.data;
//       this.setState({
//         movies:[...data.results]
//       })
//     }
//     handleRight=()=>{
//       let temparr=[]
//       for(let i=1;i<=this.state.parr.length+1;i++){
//         temparr.push(i);
//       }
//       this.setState({
//         parr:[...temparr],
//         currPage:this.state.currPage+1
//       },this.changeMovie)

//     }
//     handleLeft=()=>{
//       if(this.state.currPage!=1){
//         this.setState({
//           currPage:this.state.currPage-1

//         },this.changeMovie)
//       }

//     }
//     handleClick=(value)=>{
//       if(value!=this.state.currPage){
//         this.setState({
//           currPage:value
//         },this.changeMovie)
//       }
//     }


    
    

//   render() {
//     // let movie=movies.results
//     console.log("render")
//     return (
//       <div>
//         {
//           this.state.movies.length===0?
//             <div class="spinner-border" role="status">
//   <span class="visually-hidden">Loading...</span>
// </div>:
// <div>
// <h3 className="text-center"><strong>trending</strong></h3>

        
//         <div className="movies-list">
//             {
//                this.state.movies.map((movieObj)=>(
//                     <div className="card  movies-card" onMouseEnter={()=>this.setState({hover:movieObj.id})} onMouseLeave={()=>this.setState({hover:""})} >
//                     <img src={`https://image.tmdb.org/t/p/original${movieObj.backdrop_path}`}style={{height:"40vh"}}   alt={movieObj.title} className="card-img-top movies-img"/>
//                  {/* <div className="card-body"> */}
//                    <h1 className="card-title movies-title">{movieObj.original_title}</h1>
//                    {/* <p className="card-text movies-text">{movieObj.overview}</p> */}
//                    <div className="button_wrapper" style={{display:'flex',width:'100%',justifyContent:'center'}}>
//                     {
//                         this.state.hover==movieObj.id&&
//                         <a href="#" className="btn btn-primary movies-button">Go somewhere</a>


//                     }
                  
//                    </div>
                   
//                  {/* </div> */}
//             </div>
//             ))
//             }
//         </div>
//         <div style={{display:"flex",justifyContent:"center"}}>
//         <nav aria-label="Page navigation example">
//   <ul class="pagination">
//     <li class="page-item"><a class="page-link" onClick={this.handleLeft}>Previous</a></li>
//     {
//       this.state.parr.map((value)=>{
//         return <li class="page-item"><a class="page-link" onClick={()=>this.handleClick(value)}>{value}</a></li>
       
//       })
//     }
   
//     <li class="page-item"><a class="page-link" onClick={this.handleRight}>Next</a></li>
//   </ul>
// </nav>
//         </div>
        
//         </div>

//   }
        
//       </div>
//     )
//   }
// }

import React, { Component } from 'react'
import { movies } from './getMovies'
import axios from "axios";

export default class Movies extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       hover:"",
       parr:[1],
       currPage:1,
       movies:[],
       favourites:[]
    }
  }
  async componentDidMount(){
    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`)
         let data=res.data;
         console.log(data);
      this.setState({
            movies:[...data.results]
         })
         console.log("mounting done ")
 
  }
  changeMovie=async()=>{
         const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${this.state.currPage}`);
       let data=res.data;
         this.setState({
           movies:[...data.results]
         })
        }

  next=()=>{

    let temparr=[]
      for(let i=1;i<=this.state.parr.length+1;i++){
          temparr.push(i);
  }
     this.setState({
       parr:[...temparr],
        currPage:this.state.currPage+1
      },this.changeMovie
      )


  }
  back = () => {
    if (this.state.currPage > 1) { // Check if current page is greater than 1
        let temparr = [];
        for (let i = 1; i <= this.state.parr.length - 1; i++) {
            temparr.push(i);
        }
        this.setState({
            parr: [...temparr],
            currPage: this.state.currPage - 1 // Decrement current page
        }, () => {
            if (this.state.currPage > 0) { // Check if current page is still valid
                this.changeMovie(); // Call changeMovie only if page number is valid
            }
        });
    }
}

  handleClick=async (n)=>{

    const res=await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=5540e483a20e0b20354dabc2d66a31c9&language=en-US&page=${n}`)
         let data=res.data;
         console.log(data);
      this.setState({
            movies:[...data.results]
         })
         console.log("mounting done ")

  }

  handleClickFavourite=(m,e)=>{
    e.preventDefault()

    let oldData=JSON.parse(localStorage.getItem("movies")||"[]");
    if(this.state.favourites.includes(m.id)){
     oldData=
      oldData.filter((nik)=>nik.id!=m.id)

    }
    else{
      oldData.push(m)

    }
    console.log(oldData)
    localStorage.setItem("movies",JSON.stringify(oldData))
    this.handleFavouriteState()

  }

  handleFavouriteState=()=>{
    let oldData=JSON.parse(localStorage.getItem("movies")||"[]");
    let temp=oldData.map((m)=>m.id);
    this.setState({
      favourites:[...temp]
    })


  }
  render() {
   
    return (
      <div>
        {
          this.state.movies.length==0?
          <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>:
        <div>
          <h3 className="text-center"><strong>trending</strong></h3>
        <div className="movies-list">
          {this.state.movies.map((m)=>(
          <div className="card movies-card" onMouseEnter={()=>{this.setState({hover:m.id})}} >
          <img src={`https://image.tmdb.org/t/p/original${m.backdrop_path}`} className="card-img-top movies-img" alt={m.title} />
          {/* <div className="card-body"> */}
            <h5 className="card-title  movies-title">{m.title}</h5>
            {/* <p className="card-text banner-text">kjdnkjndsjnckjskcnasknckasnckjanskjcnkjn{m.overview}</p> */}
            <div className='button-wrapper' style={{display:"flex",justifyContent:"center"}}>
            {
                        this.state.hover==m.id&&
                        
                        <a href="#" className="btn btn-primary movies-button" onClick={(event)=>{this.handleClickFavourite(m,event)}}>{this.state.favourites.includes(m.id)?"remove from favourite":" add to favourite"}</a>


              }
           
            </div>
          {/* </div> */}
        </div>

         ))
        
           } </div>

<nav aria-label="Page navigation example" style={{display:"flex",justifyContent:'center'}}>
  <ul class="pagination">
    <li class="page-item"><a class="page-link" onClick={this.back} href="#">Previous</a></li>
    {
      this.state.parr.map((n)=>(
        <li class="page-item"><a class="page-link"  onClick={()=>this.handleClick(n)} href="#">{n}</a></li>

      ))
    }

    <li class="page-item"><a class="page-link" onClick={this.next} href="#">Next</a></li>
  </ul>
</nav>

           </div>
       

         
        }
      </div>
    )
  }
}

