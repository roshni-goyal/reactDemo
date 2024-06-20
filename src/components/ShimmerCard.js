import { ShimmerDiv,ShimmerButton }  from "shimmer-effects-react";

const ShimmerCard = () => {
    return  <div className = "shimmer-body-container">
    <ShimmerButton className = "shimmer-btn" size="md" mode="light" />
     <div className="shimmer-div-container">
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
         <ShimmerDiv className="shimmer-div" mode="light" height={400} width={200} />
     </div>
 </div>
}

export default ShimmerCard;