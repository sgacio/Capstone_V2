import React from 'react'
import { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState({
    totalIncome: 0,
    grossIncome: 0,
    amountSpent: 0,
    IncomePerSecond: 0
  })

  const createCounter = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome += 1
      return { ...prevCounter }
    })
  }

  const [clicker, setClicker] = useState({
    costOfASingle: 25, //from totalIncome
    IncomePerSecond: 0.1, //the amount of cookies that will be generated per second when this item is purchased
    numberOfClickers: 0
  })

  const [grandma, setGrandma] = useState({
    costOfASingle: 100, //from totalIncome
    IncomePerSecond: 0.5, //the amount of cookies that will be generated per second when this item is purchased
    numberOfGrandmas: 0
  })

  const [mine, setMine] = useState({
    costOfASingle: 200, //from totalIncome
    IncomePerSecond: 0.8, //the amount of cookies that will be generated per second when this item is purchased
    numberOfMines: 0
  })

  const [factory, setFactory] = useState({
    costOfASingle: 400, //from totalIncome
    IncomePerSecond: 1, //the amount of cookies that will be generated per second when this item is purchased
    numberOfFactory: 0
  })

  const AddPerSecondClicker = () => {
    if (counter.totalIncome >= clicker.costOfASingle) {
      giveMeSeconds()
      multiplyCost()
      letsIncrement()
      decreaseTotalIncome()
      increaseTotalSpent()
    }
  }

  const AddGrandmaStats = () => {
    if (
      clicker.numberOfClickers >= 10 &&
      counter.totalIncome >= clicker.costOfASingle
    ) {
      createSeconds()
      incrementGrandma()
      decreaseTotalFromGrandmaCost()
      increaseTotalSpentFromGrandma()
    }
  }

  const AddMineStats = () => {
    if (
      grandma.numberOfGrandmas >= 10 &&
      counter.totalIncome >= mine.costOfASingle
    ) {
      mineCreateSeconds()
      incrementMine()
      decreaseTotalIncomeFromMineCost()
      increaseTotalSpentFromMine()
    }
  }

  const AddFactoryStats = () => {
    if (
      mine.numberOfMines >= 10 &&
      counter.totalIncome >= factory.costOfASingle
    ) {
      factoryCreateSeconds()
      incrementFactory()
      decreaseTotalIncomeFromFactoryCost()
      increaseTotalSpentFromFactory()
    }
  }

  const giveMeSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += clicker.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const multiplyCost = () => {
    setClicker(preCost => {
      preCost.costOfASingle *= 1.18
      return { ...preCost }
    })
  }

  const letsIncrement = () => {
    setClicker(prevCounter => {
      prevCounter.numberOfClickers += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalIncome = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= clicker.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpent = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += clicker.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  const createSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += grandma.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const incrementGrandma = () => {
    setGrandma(prevCounter => {
      prevCounter.numberOfGrandmas += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalFromGrandmaCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= grandma.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromGrandma = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += grandma.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  const mineCreateSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += mine.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const incrementMine = () => {
    setMine(prevCounter => {
      prevCounter.numberOfMines += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalIncomeFromMineCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= mine.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromMine = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += mine.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  const factoryCreateSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += factory.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const incrementFactory = () => {
    setFactory(prevCounter => {
      prevCounter.numberOfFactory += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalIncomeFromFactoryCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= factory.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromFactory = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += factory.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  useInterval(() => {
    setCounter(prevPerSecond => {
      prevPerSecond.totalIncome += prevPerSecond.IncomePerSecond
      return { ...prevPerSecond }
    })
  }, 1000)

  return (
    <>
      {/* {console.log(counter.amountSpent)} */}
      <p>Hello World</p>
      <button onClick={() => createCounter()}>Give me some love</button>
      <div>
        <p>Total Income</p>
        <span>{counter.totalIncome}</span>
      </div>
      <div>
        <p>Income Per Second</p>
        <span>{counter.IncomePerSecond}</span>
      </div>
      <div>
        <p>Clicker Stats</p>
        <button onClick={() => AddPerSecondClicker()}>Add A Clicker</button>
        <p>Cost Per Clicker</p>
        <p>{clicker.costOfASingle}</p>
      </div>
      <div>
        <p>Number of Clickers Owned</p>
        <span>{clicker.numberOfClickers}</span>
      </div>
      <div>
        <p>Grandma Stats</p>
        <button onClick={() => AddGrandmaStats()}>Add A Grandma</button>
        <p>Cost Per Grandma</p>
        <p>{grandma.costOfASingle}</p>
      </div>
      <div>
        <p>Number of Grandma's Owned</p>
        <span>{grandma.numberOfGrandmas}</span>
      </div>
      <div>
        <p>Mine Stats</p>
        <button onClick={() => AddMineStats()}>Add A Mine</button>
        <p>Cost Per Mine</p>
        <p>{mine.costOfASingle}</p>
      </div>
      <div>
        <p>Number of Mines Owned</p>
        <span>{mine.numberOfMines}</span>
      </div>
      <div>
        <p>Factory Stats</p>
        <button onClick={() => AddFactoryStats()}>Add A Factory</button>
        <p>Cost Per Factory</p>
        <p>{factory.costOfASingle}</p>
      </div>
      <div>
        <p>Number of Factories Owned</p>
        <span>{factory.numberOfFactory}</span>
      </div>
    </>
  )
}

export default Counter
