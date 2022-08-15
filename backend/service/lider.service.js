import { PrismaClient} from "@prisma/client"
const prisma = new PrismaClient()

export async function   allLiders(){
        return prisma.lider.findMany()
    }
export async function create(name,job,age){
        return prisma.lider.create({
            data: {
                name: name,
                job: job,
                age: age
            }
        })
    }
    export  function  update(id,name,job,age){
        return  prisma.lider.update({
            where:{
               id
            },
            data:{
               name,
               job,
               age
            }
           
          
        })
    }
    
    export function  udelete(id){
        return prisma.lider.delete({
            where:{
                id:id
            }
        })
    }

