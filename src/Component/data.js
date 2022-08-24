import React from 'react'

export default function data({title,description,img, ReadMore}) {
  return (
    <div className='container'>
    <div className="card mb-3" >
        <div className="row g-0">
            <div className="col-md-4">
               <img src={img} className="img-fluid rounded-start" alt="..."/>
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* <button type="button" className="btn btn-secondary btn-sm" href={ReadMore}><a href={ReadMore}>read more</a></button> */}
             
                </div> 
                
            </div>
        </div>
    </div>
</div>

  )
}
