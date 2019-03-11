import Config from  '../config.json'
export default new  class BehanceApi {
    async getAllData(){
        try {
           const behanceAllData = await fetch(`${Config.API_HANDLE_CROSREQUEST}/?${Config.BEHANCE_API}/users/${Config.BEHANCE_USER}/projects?api_key=${Config.BEHANCE_API_KEY}`)
           return {
                success: true,
                message : await behanceAllData.json()
            }
        } catch (error) {
           return  {
               success: false,
               message: 'List Portfolio kosong'
           } 
        }
    }
}