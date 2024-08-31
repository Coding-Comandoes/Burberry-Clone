import React from 'react'

const BookanAppointment = () => {
  return (
    <>
      <div>
        <img src="https://tse3.mm.bing.net/th?id=OIP.KlHch25DK4qAug9oTMQ52gHaHa&pid=Api&P=0&h=180" alt='backgroundimage' style={{height:'700px',"width":"100%"}}></img>
      </div>
      <div style={{"display":"grid","justify-content":'center',"marginTop":"35px"}}>
        <h1 style={{"fontWeight":"500","fontFamily":"arial","textAlign":'center',"fontSize":"50px"}}>Personalised Services</h1>
         <div style={{"display":"flex","flexDirection":"row", "fontSize":"0.95em","gap":"20px","justifyContent":"center","position":"relative","bottom":"0px"}}>
            <a href='/In-store Appointments'>In-store Appointments</a>
            <a href='/Virtual Appointments'>Virtual Appointments</a>
            <a href='/Aftercare'>Aftercare Appointments</a>
         </div>
         <div><br></br><br></br>
          <img src='https://img.freepik.com/free-vector/flat-christmas-plaid-pattern-design_23-2149209404.jpg?size=626&ext=jpg' alt='bbackgroundimage' style={{"height":"500px","width":"1400px","marginTop":"30px","marginBottom":"0px"}}></img>
         </div>
      </div>
    </>
   
  )
}

export default BookanAppointment

