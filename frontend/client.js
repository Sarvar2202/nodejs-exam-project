const _name = document.querySelector("#name")
const job = document.querySelector("#job")
const age = document.querySelector("#age")
const addU = document.querySelector("#addU")
const deleteU = document.querySelector("#idd")
const editU = document.querySelector("#ide")
const deleteUBtn = document.querySelector("#iddbtn")
const editUBtn = document.querySelector("#idebtn")
const tbody = document.querySelector('#tbody')
const URLL = "http://localhost:8080/liders"


addU.onclick = () => {
  
  let body = {
    name: _name.value,
    job: job.value,
    age: +age.value
  }

  axios.post( URLL, body)
  .then(res => res.data)
  .then(res => {
    _name.value = ''
    job.value = ''
    age.value = ''
  })
  .catch(err => console.log(err))

  reload()
    
}

deleteUBtn.onclick = () => {
  axios.delete(URLL + "/" + `${deleteU.value}`)
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err))

    reload()
}

editUBtn.onclick = () => {

  let body = {
    name: _name.value,
    job: job.value,
    age: +age.value
  }
  
  axios.put(URLL + "/" + `${editU.value}`, body)
  .then(res => res.data)
  .then(res => {
    _name.value = ''
    job.value = ''
    age.value = ''
    ide.value = ''
  })
  .catch(err => console.log(err))

   reload()
}

axios.get(URLL)
  .then(res =>  {
  tbody.innerHTML=" "
  for(user of res.data){
      tbody.innerHTML+=`
      <tr>
        <td data-label="Id">${user.id}</td>
        <td data-label="Name">${user.name}</td>
        <td data-label="Age">${user.age}</td>
        <td data-label="Job">${user.job}</td>
      </tr>`
  }
})



function reload() {
  return setTimeout(() => {
    window.location.reload()
  }, 3000);
}

