import React from 'react'
import './card.css'
function Card(props) {
    let durum;
    if(props.item.openSpots===0)
    {
        durum="SATILDI";
    }
    else if(props.item.location==="Online")
    {
        durum="ONLINE"
    }
    const kart=props.item;
    return (
        <div className='card'>
            {durum && <div className='status'>{durum}</div>}
            <img src={`img/${kart.coverImg}`} alt="" />
            <div className="card-content">
                <div className="card-rating">
                    <img src="img/Star.png" alt="" />
                    <span className='rate'>{kart.stats.rate}</span>
                    <span className='gray'>({kart.stats.reviewCount}) . </span>
                    <span className='gray'>USA</span>
                </div>
                <div className="card-title">
                {kart.title}
                </div>
                <div className="card-footer">
                    <span className='bold'>From {kart.price}</span>
                    <span> / person</span>
                </div>
            </div>
        </div>
    )
}

export default Card
