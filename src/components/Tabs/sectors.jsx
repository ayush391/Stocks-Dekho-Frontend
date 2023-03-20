import { Button } from "@mui/material";
import { Stack } from "@mui/system"
export const SectorTab =()=>{
    const sectorList = ["IT", "MEDIA", "METAL","PHARMA","REALTY","HEALTHCARE INDEX"," OIL & GAS"]
    return(
       
           
            <Stack direction='row' sx={{color:'green'}} justifyContent={'center'} style={{display:'inline-block'}}>
                {
                    sectorList.map((sector)=>(
                        <Button style={{border:'1px solid' , paddingLeft:3 , paddingRight:3   , borderRadius:12 , marginRight:5 , marginBottom:5}}>{sector}</Button>
                    ))
                }
            </Stack>
            
    )
}