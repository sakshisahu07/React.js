// const Data=()=>{
//     return(
//         <>
//             <h1>
//                 This is my Data
//                 <br/>
//                 ---------------------
//             </h1>
//         </>
//     )
// }
// export default Data;

import TopData from "./TopData";
import Middle from "./MiddleData";
import Bottom from "./BottomData";

const Data=()=>{
    return(
        <>
        <h1>
            This is Data
            <br/>
            
        </h1>
        <TopData/>
        <Middle/>
        <Bottom/>
        </>
    )
}
export default Data;