 import second from 'react'

 import Image from "../../assets/new-pic-res.jpg"

 const InlineCss = ()=>{
    return(
        <div>
            {/* <div style={{
                width: "300px",
                height: "300px",
                background : "red"
            }}>
            </div> */}

            {/* <header>
                <nav style={{
                    display : "flex",
                    justifyContent : "space-around",
                    alignItems : "center",
                    height : "15vh",
                    background : "red"
                }}>
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                    <div>item</div>
                </nav>
            </header> */}

            <img src={Image} alt="" width = "500px" />
        </div>
    )
 }

 export default InlineCss