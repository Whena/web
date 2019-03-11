import Config from  '../config.json'
export default new  class MediumApi {
    async getAllData(){
        try {
           let MediumData = await fetch(`${Config.API_HANDLE_CROSREQUEST}/?${Config.MEDIUM_API}/${Config.MEDIUM_USER}/latest?format=json`)
           MediumData =  await MediumData.text();
           MediumData =  MediumData.replace('])}while(1);</x>','')
           MediumData =  JSON.parse(MediumData);
           return {
                success: true,
                message : MediumData.payload.references.Post
            }
        } catch (error) {
           return  {
               success: false,
               message: 'List blog kosong'
           } 
        }
    }
    async getDetail(id){
        try {
            let MediumData = await fetch(`${Config.API_HANDLE_CROSREQUEST}/?${Config.MEDIUM_API}/${Config.MEDIUM_USER}/${id}?format=json`)
            MediumData =  await MediumData.text();
            MediumData =  MediumData.replace('])}while(1);</x>','')
            MediumData =  JSON.parse(MediumData);
            return {
                 success: true,
                 message : MediumData.payload.value
             }
         } catch (error) {
            return  {
                success: false,
                message: 'List blog kosong'
            } 
         }
    }
}