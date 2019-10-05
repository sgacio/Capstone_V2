import React from 'react'
import { useState, useEffect } from 'react'
import useInterval from '../Hooks/useInterval'
import Latest from './images/latest.png'
import axios from 'axios'
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
    IncomePerSecond: 0.05, //the amount of cookies that will be generated per second when this item is purchased
    numberOfClickers: 0
  })

  const [Worker, setWorker] = useState({
    costOfASingle: 760, //from totalIncome
    IncomePerSecond: 0.3, //the amount of cookies that will be generated per second when this item is purchased
    numberOfWorkers: 0
  })

  const [Keurig, setKeurig] = useState({
    costOfASingle: 1600, //from totalIncome
    IncomePerSecond: 0.5, //the amount of cookies that will be generated per second when this item is purchased
    numberOfKeurigs: 0
  })

  const [Espresso, setEspresso] = useState({
    costOfASingle: 5000, //from totalIncome
    IncomePerSecond: 0.8, //the amount of cookies that will be generated per second when this item is purchased
    numberOfEspresso: 0
  })

  const [Id, setId] = useState()

  const AddPerSecondClicker = () => {
    if (counter.totalIncome >= clicker.costOfASingle) {
      giveMeSeconds()
      multiplyCost()
      letsIncrement()
      decreaseTotalIncome()
      increaseTotalSpent()
      // putToServer()
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
      // putToServer()
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
      // putToServer()
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
      // putToServer()
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

  useInterval(() => {
    counterToServer()
  }, 30000)

  const counterToServer = async () => {
    const data = {
      Id: Id,
      counter: JSON.stringify(counter),
      clicker: JSON.stringify(clicker),
      worker: JSON.stringify(Worker),
      Keurig: JSON.stringify(Keurig),
      EspressoMachine: JSON.stringify(Espresso)
    }

    const resp = await axios.put(
      `https://localhost:5001/api/Object/${Id}`,
      data
    )
  }

  const saveToServer = async () => {
    const data = {
      counter: JSON.stringify(counter),
      clicker: JSON.stringify(clicker),
      worker: JSON.stringify(Worker),
      Keurig: JSON.stringify(Keurig),
      EspressoMachine: JSON.stringify(Espresso)
    }

    const resp = await axios.post('https://localhost:5001/api/Object', data)

    setId(resp.data.id)
    console.log(resp.data.id)
  }

  const putToServer = async () => {
    const data = {
      Id: Id,
      counter: JSON.stringify(counter),
      clicker: JSON.stringify(clicker),
      worker: JSON.stringify(Worker),
      Keurig: JSON.stringify(Keurig),
      EspressoMachine: JSON.stringify(Espresso)
    }
    const resp = await axios.put(
      `https://localhost:5001/api/Object/${Id}`,
      data
    )
  }

  useEffect(() => {
    saveToServer()
  }, [])

  useEffect(() => {
    putToServer()
  }, [clicker, Worker, Keurig, Espresso])

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
          <span>{Math.round(counter.totalIncome * 100) / 100}</span> Coffee's
          collected
        </p>
        <p>
          <span>{Math.ceil(counter.IncomePerSecond * 100) / 100}</span> Cups Per
          Second(CPS)
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
                <button
                  onClick={
                    () => AddPerSecondClicker()
                    // putToServer()
                  }
                >
                  <th scope="col">Clicker</th>
                </button>
                <button
                  onClick={
                    () => AddWorkerStats()
                    // putToServer()
                  }
                >
                  <th scope="col">Worker</th>
                </button>
                <button
                  onClick={
                    () => AddKeurigStats()
                    // putToServer()
                  }
                >
                  <th scope="col">Keurig</th>
                </button>
                <button
                  onClick={
                    () => AddEspressoStats()
                    // putToServer()
                  }
                >
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
                  <p>{Math.round(clicker.costOfASingle * 100) / 100}</p>
                </td>
                <td>
                  <p>{Math.round(Worker.costOfASingle * 100) / 100}</p>
                </td>
                <td>
                  <p>{Math.round(Keurig.costOfASingle * 100) / 100}</p>
                </td>
                <td>
                  <p>{Math.round(Espresso.costOfASingle * 100) / 100}</p>
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
