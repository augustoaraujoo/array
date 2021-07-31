const pro = new Promise((resolve)=>{
     resolve({ idadePermitida: 18})
})

 pro.then((value)=>{
     const usuario = 10
         if(usuario < value.idadePermitida){
             return(
                 console.log('negado'),
                 getIdadeMenor()
             )
         }
         else{console.log('acesso ok')}
      })
 function getIdadeMenor(){
      console.log(`sua idade é menor`)
 }

