export const Results = (props) => {
  const { playCards } = props;

  const nums = [];
  playCards.forEach((playCard) => {
    switch (playCard.index) {
      case "A":
        nums.push(1);
        break;
      case "J":
        nums.push(11);
        break;
      case "Q":
        nums.push(12);
        break;
      case "K":
        nums.push(13);
        break;
      default:
        nums.push(playCard.index);
        break;
    }
  });

  const results = [];
  const calculate = (nums) => {
    let n = [...nums];
    let nBackup0 = [...n];
    let nBackup1;
    let nBackup2;
    const ns = [];
    let n0;
    let n1;
    let n2;
    let n3;

    for (let i = 0; i < n.length; i++) {
      n0 = n.splice(i, 1)[0];
      nBackup1 = [...n];
      for (let i = 0; i < n.length; i++) {
        n1 = n.splice(i, 1)[0];
        nBackup2 = [...n];
        for (let i = 0; i < n.length; i++) {
          n2 = n.splice(i, 1)[0];
          for (let i = 0; i < n.length; i++) {
            n3 = n.splice(0, 1)[0];
            ns.push([n0, n1, n2, n3]);
          }
          n = [...nBackup2];
        }
        n = [...nBackup1];
      }
      n = [...nBackup0];
    }
    // console.table(ns);

    const calculate = [plus, minus, multiple, divide];
    function plus(a, b) {
      return a + b;
    }
    function minus(a, b) {
      return a - b;
    }
    function multiple(a, b) {
      return a * b;
    }
    function divide(a, b) {
      return a / b;
    }

    //(a+b)+(c+d)
    const calculateOrder0 = (a, b, c, d, i, j, k) => {
      return calculate[i](calculate[k](a, b), calculate[j](c, d));
    };
    //((a+b)+c)+d
    const calculateOrder1 = (a, b, c, d, i, j, k) => {
      return calculate[i](calculate[j](calculate[k](a, b), c), d);
    };
    //((a+b)+d)+c
    const calculateOrder2 = (a, b, c, d, i, j, k) => {
      return calculate[i](calculate[j](calculate[k](a, b), d), c);
    };
    //(a+(b+c))+d
    const calculateOrder3 = (a, b, c, d, i, j, k) => {
      return calculate[i](calculate[j](a, calculate[k](b, c)), d);
    };
    //a+((b+c)+d)
    const calculateOrder4 = (a, b, c, d, i, j, k) => {
      return calculate[i](a, calculate[j](calculate[k](b, c), d));
    };
    //a+(b+(c+d))
    const calculateOrder5 = (a, b, c, d, i, j, k) => {
      return calculate[i](a, calculate[j](b, calculate[k](c, d)));
    };
    //b+(a+(c+d))
    const calculateOrder6 = (a, b, c, d, i, j, k) => {
      return calculate[i](b, calculate[j](a, calculate[k](c, d)));
    };
    const calculateOrder = [
      calculateOrder0,
      calculateOrder1,
      calculateOrder2,
      calculateOrder3,
      calculateOrder4,
      calculateOrder5,
      calculateOrder6,
    ];

    let result;
    ns.forEach((n) => {
      for (let l = 0; l < calculateOrder.length; l++) {
        for (let i = 0; i < 4; i++) {
          for (let j = 0; j < 4; j++) {
            for (let k = 0; k < 4; k++) {
              result = calculateOrder[l](n[0], n[1], n[2], n[3], i, j, k);

              if (result === 24) {
                results.push([n[0], n[1], n[2], n[3], l, i, j, k]);
              }
            }
          }
        }
      }
    });
  };

  calculate(nums);

  let level = "";
  if (results.length === 0) {
    level = "no result";
  } else if (results.length <= 10) {
    level = "very hard";
  } else if (results.length <= 30) {
    level = "hard";
  } else if (results.length <= 80) {
    level = "normal";
  } else if (results.length <= 120) {
    level = "easy";
  } else {
    level = "very easy";
  }

  const ResultItem = (props) => {
    const{result}=props;
    return(
      <p>{`${result[0]}+${result[1]}+${result[2]}+${result[3]}`}</p>
    )
  };

  return (
    <>
      <div className="results">
        <p>Results Length: {results.length || 0}</p>
        <p>Level: {level}</p>
      </div>
      <button>Answer</button>

      <div className="results">
        {results.map((result,index)=>{
          return(
            <ResultItem key={index} result={result}/>
          )
        })}
      </div>
    </>
  );
};
