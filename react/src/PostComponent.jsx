const style = {
    width : 200 , 
    backgroundColor:"white" , 
    borderRadius:10 , 
    borderColor : "grey" ,
    borderWidth : 1
}
export default function PostComponent(){
  return <div style={{style}}>
    <img src={"https://picsum.photos/id/1/200/300"} 
    style={{
      width : 150,
      height : 100 ,
      borderRadius : 100
    }}></img>

  </div>
}

