import React from 'react'
import { useEffect, useState } from 'react'
import useInterval from '../Hooks/useInterval'
import Latest from './images/latest.png'
import './layout.css'

const Home = () => {
  // let static displayName = Home.name

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
      {/* 
        Small devices (landscape phones, 576px and up)
        Medium devices (tablets, 768px and up)
        Large devices (desktops, 992px and up)
        Extra large devices (large desktops, 1200px and up) 
        */}
      <div className="container">
        <p>
          <span>Username</span> Coffee Shop
        </p>
        <p>
          <span>1</span> Coffee's collected
        </p>
        <p>
          <span>1</span> Cups Per Second(CPS)
        </p>
        <button>
          <img
            src={Latest}
            className="coffee-image img-fluid"
            alt="White starbucks coffee cup"
          ></img>
        </button>
        <div className="container-fluid">
          <table className="table table-dark">
            <thead>
              <tr>
                <th></th>
                <th scope="col">clicker</th>
                <th scope="col">Worker</th>
                <th scope="col">Keurig</th>
                <th scope="col">Factory</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Number Of</th>
                <td>
                  <p>2</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>1</p>
                </td>
                <td>
                  <p>1</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Cost</th>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>10</p>
                </td>
                <td>
                  <p>10</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Home
