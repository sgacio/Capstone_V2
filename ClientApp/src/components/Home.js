import React from 'react'
import { useState } from 'react'
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
    costOfASingle: 40, //from totalIncome
    IncomePerSecond: 0.1, //the amount of cookies that will be generated per second when this item is purchased
    numberOfClickers: 0
  })

  const [Worker, setWorker] = useState({
    costOfASingle: 120, //from totalIncome
    IncomePerSecond: 0.5, //the amount of cookies that will be generated per second when this item is purchased
    numberOfWorkers: 0
  })

  const [Keurig, setKeurig] = useState({
    costOfASingle: 240, //from totalIncome
    IncomePerSecond: 0.8, //the amount of cookies that will be generated per second when this item is purchased
    numberOfKeurigs: 0
  })

  const [Espresso, setEspresso] = useState({
    costOfASingle: 480, //from totalIncome
    IncomePerSecond: 1, //the amount of cookies that will be generated per second when this item is purchased
    numberOfEspresso: 0
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

  const AddWorkerStats = () => {
    if (
      clicker.numberOfClickers >= 1 &&
      counter.totalIncome >= Worker.costOfASingle
    ) {
      createSeconds()
      multiplyCostWorker()
      incrementWorker()
      decreaseTotalFromWorkerCost()
      increaseTotalSpentFromWorker()
    }
  }

  const AddKeurigStats = () => {
    if (
      Worker.numberOfWorkers >= 10 &&
      counter.totalIncome >= Keurig.costOfASingle
    ) {
      KeurigCreateSeconds()
      multiplyCostKeurig()
      incrementKeurig()
      decreaseTotalIncomeFromKeurigCost()
      increaseTotalSpentFromKeurig()
    }
  }

  const AddEspressoStats = () => {
    if (
      Keurig.numberOfKeurigs >= 10 &&
      counter.totalIncome >= Espresso.costOfASingle
    ) {
      EspressoCreateSeconds()
      multiplyCostEspresso()
      incrementEspresso()
      decreaseTotalIncomeFromEspressoCost()
      increaseTotalSpentFromEspresso()
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
      preCost.costOfASingle *= 1.28
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
      prevPerSecond.IncomePerSecond += Worker.IncomePerSecond
      return { ...prevPerSecond }
    })
  }
  const multiplyCostWorker = () => {
    setWorker(preCost => {
      preCost.costOfASingle *= 1.28
      return { ...preCost }
    })
  }

  const incrementWorker = () => {
    setWorker(prevCounter => {
      prevCounter.numberOfWorkers += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalFromWorkerCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= Worker.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromWorker = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += Worker.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  const multiplyCostKeurig = () => {
    setKeurig(preCost => {
      preCost.costOfASingle *= 1.28
      return { ...preCost }
    })
  }

  const KeurigCreateSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += Keurig.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const incrementKeurig = () => {
    setKeurig(prevCounter => {
      prevCounter.numberOfKeurigs += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalIncomeFromKeurigCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= Keurig.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromKeurig = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += Keurig.costOfASingle
      return { ...prevAmountSpent }
    })
  }

  const multiplyCostEspresso = () => {
    setEspresso(preCost => {
      preCost.costOfASingle *= 1.28
      return { ...preCost }
    })
  }

  const EspressoCreateSeconds = () => {
    setCounter(prevPerSecond => {
      prevPerSecond.IncomePerSecond += Espresso.IncomePerSecond
      return { ...prevPerSecond }
    })
  }

  const incrementEspresso = () => {
    setEspresso(prevCounter => {
      prevCounter.numberOfEspresso += 1
      return { ...prevCounter }
    })
  }

  const decreaseTotalIncomeFromEspressoCost = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome -= Espresso.costOfASingle
      return { ...prevCounter }
    })
  }

  const increaseTotalSpentFromEspresso = () => {
    setCounter(prevAmountSpent => {
      prevAmountSpent.amountSpent += Espresso.costOfASingle
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
          <span>{counter.totalIncome}</span> Coffee's collected
        </p>
        <p>
          <span>{counter.IncomePerSecond}</span> Cups Per Second(CPS)
        </p>
        <button onClick={() => createCounter()}>
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
                <button onClick={() => AddPerSecondClicker()}>
                  <th scope="col">Clicker</th>
                </button>
                <button onClick={() => AddWorkerStats()}>
                  <th scope="col">Worker</th>
                </button>
                <button onClick={() => AddKeurigStats()}>
                  <th scope="col">Keurig</th>
                </button>
                <button onClick={() => AddEspressoStats()}>
                  <th scope="col">Espresso Machine</th>
                </button>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Number Of</th>
                <td>
                  <p>{clicker.numberOfClickers}</p>
                </td>
                <td>
                  <p>{Worker.numberOfWorkers}</p>
                </td>
                <td>
                  <p>{Keurig.numberOfKeurigs}</p>
                </td>
                <td>
                  <p>{Espresso.numberOfEspresso}</p>
                </td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Cost</th>
                <td>
                  <p>{clicker.costOfASingle}</p>
                </td>
                <td>
                  <p>{Worker.costOfASingle}</p>
                </td>
                <td>
                  <p>{Keurig.costOfASingle}</p>
                </td>
                <td>
                  <p>{Espresso.costOfASingle}</p>
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
