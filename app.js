const stringFormatter=str=>{
  return str.split('').map((char,index)=>{
    const repeatedChars=char.toLowerCase().repeat(index);
    return char.toUpperCase()+repeatedChars;
  }).join('-');
};

document.querySelector('button').addEventListener('click',(e)=>{
  const inputValue=document.querySelector('input').value;
  const formattedString=stringFormatter(inputValue);
  const p=document.createElement('p');
  p.textContent=formattedString;
  document.body.appendChild(p);
});