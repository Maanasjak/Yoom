const Meeting = ({params}: {params:{id:string}}) => {
  return ( 
    <div>
      Helllo meeting #{params.id}
    </div>
   );
}

export default Meeting;