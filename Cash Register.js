let denom = [
  { nome: "ONE HUNDRED", valor: 100.0 },
  { nome: "TWENTY", valor: 20.0 },
  { nome: "TEN", valor: 10.0 },
  { nome: "FIVE", valor: 5.0 },
  { nome: "ONE", valor: 1.0 },
  { nome: "QUARTER", valor: 0.25 },
  { nome: "DIME", valor: 0.1 },
  { nome: "NICKEL", valor: 0.05 },
  { nome: "PENNY", valor: 0.01 }
];

function valorDinheiro(str)
{
    for(let i=0;i<denom.length;i++)
    {
        if (denom[i].nome === str)
        {
            return denom[i].valor;
        }
    }
}
function checkCashRegister(price, cash, cid) {
    let saida = { status: null, change: [] };
    let troco = cash - price;
    
    let caixaTotal=0;
    for(let i=0;i<cid.length;i++)
    {
        
      caixaTotal += cid[i][1];
    }
    caixaTotal = Math.round(caixaTotal * 100) / 100;
    if (caixaTotal < troco) {
      saida.status = "INSUFFICIENT_FUNDS";
      return saida;
    }
    
    if (caixaTotal === troco) {
      saida.status = "CLOSED";
      saida.change = cid;
      return saida;
    }
    
    for(let i=cid.length-1;i>=0;i--)
    {
        let valor = valorDinheiro(cid[i][0]);
        
        let n=0; 
        if (troco >= valor) {
          while(troco >=valor && cid[i][1] > 0)
          {
            troco -= valor;
            troco = Math.round(troco * 100) / 100;
            cid[i][1] -= valor;
            n++;
          }
          if(n>0)
          {
            saida.change.push([cid[i][0],n*valor]);
          }  
        }    
    }
    troco = Math.round(troco * 10) / 10;
    if(troco !=0)
    {
      saida.status = "INSUFFICIENT_FUNDS";
      saida.change = [];
      return saida;
    }

    saida.status = "OPEN";
    return saida;
    
  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
