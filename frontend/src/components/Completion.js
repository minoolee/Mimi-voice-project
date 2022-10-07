import userUser from "../context/useUser"
function Completion() {
  const user = userUser()
  return (
    <section>
      <div>
         <h1 className="font-medium">Thank you! {user.data.name}🎉</h1>
             <h2>See you next time</h2>
         </div>
     
    </section>
  ) 
  }

export default Completion;
