import { useState } from 'react';

export const Calculator = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const handleSum = () => setResult(num1 + num2);
  const handleSubtract = () => setResult(num1 - num2);
  const handleMultiply = () => setResult(num1 * num2);
  const handleDivide = () => {
    if (num2 !== 0) {
      setResult(num1 / num2);
    } else {
      setResult('Error: División por cero');
    }
  };

  return (
    <>
        <div>
            <h1 className='m-2 text-5xl font-bold text-center text-blue-700'>Calculator</h1>
            <div className='flex flex-col items-center justify-center p-8 m-4 w-120 h-80 bg-gradient-to-b from-violet-700 via-sky-600 to-red-700 rounded-xl'>
      <input 
        onChange={(e) => setNum1(parseFloat(e.target.value))} 
        className='p-2 mb-2 text-xl w-80 rounded-xl' 
        type="number" 
        placeholder='Type the first number' 
      />
      <input 
        onChange={(e) => setNum2(parseFloat(e.target.value))} 
        className='p-2 mb-2 text-xl w-80 rounded-xl' 
        type="number" 
        placeholder='Type the second number' 
      />
      <div className='flex mb-4 space-x-2'>
        <button onClick={handleSum} className='p-2 font-bold text-white bg-blue-500 rounded-xl'>
          Add
        </button>
        <button onClick={handleSubtract} className='p-2 font-bold text-white bg-red-500 rounded-xl'>
          Substract
        </button>
        <button onClick={handleMultiply} className='p-2 font-bold text-white bg-green-500 rounded-xl'>
          Multiply
        </button>
        <button onClick={handleDivide} className='p-2 font-bold text-white bg-yellow-500 rounded-xl'>
          Split
        </button>
      </div>
      <h2 className='text-2xl font-bold text-white'>
        Result: {result !== null ? result : '0'}
      </h2>
    </div>
        </div>
    </>
  );
};