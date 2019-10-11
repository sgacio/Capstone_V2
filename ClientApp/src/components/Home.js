import React from 'react'
import { useState, useEffect } from 'react'
import useInterval from '../Hooks/useInterval'
import Latest from './images/latest.png'
import Table from './Table'
import axios from 'axios'
import './layout.css'

const Home = props => {
  const [counter, setCounter] = useState({
    totalIncome: 0,
    grossIncome: 0,
    amountSpent: 0,
    IncomePerSecond: 0
  })

  const [clicker, setClicker] = useState({
    costOfASingle: 40,
    IncomePerSecond: 0.05,
    numberOf: 0
  })

  const [Worker, setWorker] = useState({
    costOfASingle: 540,
    IncomePerSecond: 0.3,
    numberOf: 0
  })

  const [Keurig, setKeurig] = useState({
    costOfASingle: 1600,
    IncomePerSecond: 0.5,
    numberOf: 0
  })

  const [Espresso, setEspresso] = useState({
    costOfASingle: 5000,
    IncomePerSecond: 0.8,
    numberOf: 0
  })

  const ObjectArray = [clicker, Worker, Keurig, Espresso]

  const [Id, setId] = useState()

  const AddPerSecondClicker = () => {
    if (counter.totalIncome >= clicker.costOfASingle) {
      giveMeSecondsClicker()
      multiplyCost()
      letsIncrement()
      decreaseTotalIncomeClicker()
      increaseTotalSpentClicker()
    }
  }

  const AddWorkerStats = () => {
    if (clicker.numberOf >= 1 && counter.totalIncome >= Worker.costOfASingle) {
      giveMeSecondsWorker()
      multiplyCostWorker()
      incrementWorker()
      decreaseTotalFromWorkerCost()
      increaseTotalSpentFromWorker()
    }
  }

  const AddKeurigStats = () => {
    if (Worker.numberOf >= 10 && counter.totalIncome >= Keurig.costOfASingle) {
      KeurigCreateSeconds()
      multiplyCostKeurig()
      incrementKeurig()
      decreaseTotalIncomeFromKeurigCost()
      increaseTotalSpentFromKeurig()
    }
  }

  const AddEspressoStats = () => {
    if (
      Keurig.numberOf >= 10 &&
      counter.totalIncome >= Espresso.costOfASingle
    ) {
      EspressoCreateSeconds()
      multiplyCostEspresso()
      incrementEspresso()
      decreaseTotalIncomeFromEspressoCost()
      increaseTotalSpentFromEspresso()
    }
  }

  // const giveMeSeconds = () => {
  //   setCounter(prevPerSecond => {
  //     prevPerSecond.IncomePerSecond += clicker.IncomePerSecond
  //     return { ...prevPerSecond }
  //   })
  // }

  // const letsIncrement = () => {
  //   setClicker(prevCounter => {
  //     prevCounter.numberOf += 1
  //     return { ...prevCounter }
  //   })
  // }

  // const decreaseTotalIncome = () => {
  //   setCounter(prevCounter => {
  //     prevCounter.totalIncome -= clicker.costOfASingle
  //     return { ...prevCounter }
  //   })
  // }

  // const increaseTotalSpent = () => {
  //   setCounter(prevAmountSpent => {
  //     prevAmountSpent.amountSpent += clicker.costOfASingle
  //     return { ...prevAmountSpent }
  //   })
  // }

  // const createSeconds = () => {
  //   setCounter(prevPerSecond => {
  //     prevPerSecond.IncomePerSecond += Worker.IncomePerSecond
  //     return { ...prevPerSecond }
  //   })
  // }
  const giveMeSeconds = (set, key, kai) => {
    set(prev => {
      prev[key] += kai[key]
    })
  }

  const giveMeSecondsClicker = () => {
    giveMeSeconds(setCounter, 'IncomePerSecond', clicker)
  }

  const giveMeSecondsWorker = () => {
    giveMeSeconds(setCounter, 'IncomePerSecond', Worker)
  }

  const KeurigCreateSeconds = () => {
    giveMeSeconds(setCounter, 'IncomePerSecond', Keurig)
  }

  const EspressoCreateSeconds = () => {
    giveMeSeconds(setCounter, 'IncomePerSecond', Espresso)
  }

  const multiply = (set, key) => {
    set(prev => {
      prev[key] *= 1.28
      return { ...prev }
    })
  }

  const multiplyCost = () => {
    multiply(setClicker, 'costOfASingle')
  }

  const multiplyCostWorker = () => {
    multiply(setWorker, 'costOfASingle')
  }

  const multiplyCostKeurig = () => {
    multiply(setKeurig, 'costOfASingle')
  }

  const multiplyCostEspresso = () => {
    multiply(setEspresso, 'costOfASingle')
  }

  const increment = (set, key) => {
    set(prev => {
      prev[key] += 1
      return { ...prev }
    })
  }

  const createCounter = () => {
    setCounter(prevCounter => {
      prevCounter.totalIncome += 1
      return { ...prevCounter }
    })
  }

  const letsIncrement = () => {
    increment(setClicker, 'numberOf')
  }

  const incrementWorker = () => {
    increment(setWorker, 'numberOf')
  }

  const incrementKeurig = () => {
    increment(setKeurig, 'numberOf')
  }

  const incrementEspresso = () => {
    increment(setEspresso, 'numberOf')
  }

  const decreaseTotalIncome = (set, key, kai, ken) => {
    set(prev => {
      prev[key] -= kai[ken]
      return { ...prev }
    })
  }

  const decreaseTotalIncomeClicker = () => {
    decreaseTotalIncome(setCounter, 'totalIncome', clicker, 'costOfASingle')
  }

  const decreaseTotalFromWorkerCost = () => {
    decreaseTotalIncome(setCounter, 'totalIncome', Worker, 'costOfASingle')
  }

  const decreaseTotalIncomeFromKeurigCost = () => {
    decreaseTotalIncome(setCounter, 'totalIncome', Keurig, 'costOfASingle')
  }

  const decreaseTotalIncomeFromEspressoCost = () => {
    decreaseTotalIncome(setCounter, 'totalIncome', Espresso, 'costOfASingle')
  }

  const increaseTotalSpent = (set, key, kai, ken) => {
    set(prev => {
      prev[key] += kai[ken]
      return { ...prev }
    })
  }

  const increaseTotalSpentClicker = () => {
    increaseTotalSpent(setCounter, 'amountSpent', clicker, 'costOfASingle')
  }

  const increaseTotalSpentFromWorker = () => {
    increaseTotalSpent(setCounter, 'amountSpent', Worker, 'costOfASingle')
  }

  const increaseTotalSpentFromKeurig = () => {
    increaseTotalSpent(setCounter, 'amountSpent', Keurig, 'costOfASingle')
  }

  const increaseTotalSpentFromEspresso = () => {
    increaseTotalSpent(setCounter, 'amountSpent', Espresso, 'costOfASingle')
  }

  // const incrementWorker = () => {
  //   setWorker(prevCounter => {
  //     prevCounter.numberOf += 1
  //     return { ...prevCounter }
  //   })
  // }

  // const decreaseTotalFromWorkerCost = () => {
  //   setCounter(prevCounter => {
  //     prevCounter.totalIncome -= Worker.costOfASingle
  //     return { ...prevCounter }
  //   })
  // }

  // const increaseTotalSpentFromWorker = () => {
  //   setCounter(prevAmountSpent => {
  //     prevAmountSpent.amountSpent += Worker.costOfASingle
  //     return { ...prevAmountSpent }
  //   })
  // }

  // const multiplyCostKeurig = () => {
  //   setKeurig(preCost => {
  //     preCost.costOfASingle *= 1.28
  //     return { ...preCost }
  //   })
  // }

  // const KeurigCreateSeconds = () => {
  //   setCounter(prevPerSecond => {
  //     prevPerSecond.IncomePerSecond += Keurig.IncomePerSecond
  //     return { ...prevPerSecond }
  //   })
  // }

  // const incrementKeurig = () => {
  //   setKeurig(prevCounter => {
  //     prevCounter.numberOf += 1
  //     return { ...prevCounter }
  //   })
  // }

  // const decreaseTotalIncomeFromKeurigCost = () => {
  //   setCounter(prevCounter => {
  //     prevCounter.totalIncome -= Keurig.costOfASingle
  //     return { ...prevCounter }
  //   })
  // }

  // const increaseTotalSpentFromKeurig = () => {
  //   setCounter(prevAmountSpent => {
  //     prevAmountSpent.amountSpent += Keurig.costOfASingle
  //     return { ...prevAmountSpent }
  //   })
  // }

  // const multiplyCostEspresso = () => {
  //   setEspresso(preCost => {
  //     preCost.costOfASingle *= 1.28
  //     return { ...preCost }
  //   })
  // }

  // const EspressoCreateSeconds = () => {
  //   setCounter(prevPerSecond => {
  //     prevPerSecond.IncomePerSecond += Espresso.IncomePerSecond
  //     return { ...prevPerSecond }
  //   })
  // }

  // const incrementEspresso = () => {
  //   setEspresso(prevCounter => {
  //     prevCounter.numberOf += 1
  //     return { ...prevCounter }
  //   })
  // }

  // const decreaseTotalIncomeFromEspressoCost = () => {
  //   setCounter(prevCounter => {
  //     prevCounter.totalIncome -= Espresso.costOfASingle
  //     return { ...prevCounter }
  //   })
  // }

  // const increaseTotalSpentFromEspresso = () => {
  //   setCounter(prevAmountSpent => {
  //     prevAmountSpent.amountSpent += Espresso.costOfASingle
  //     return { ...prevAmountSpent }
  //   })
  // }

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
      `https://coffee-clicker.herokuapp.com/api/Object/${Id}`,
      data
    )
  }

  const sendPlayerIdToSingleGameSave = async id => {
    const resp = await axios.post(
      'https://coffee-clicker.herokuapp.com/api/SingleGameSave',
      {
        PlayerId: props.match.params.id,
        ObjectId: id
      }
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

    const resp = await axios.post(
      'https://coffee-clicker.herokuapp.com/api/Object',
      data
    )

    setId(resp.data.id)
    console.log(resp.data.id)
    console.log(resp.data)
    sendPlayerIdToSingleGameSave(resp.data.id)
  }

  const putToServer = async () => {
    if (Id) {
      const data = {
        Id: Id,
        counter: JSON.stringify(counter),
        clicker: JSON.stringify(clicker),
        worker: JSON.stringify(Worker),
        Keurig: JSON.stringify(Keurig),
        EspressoMachine: JSON.stringify(Espresso)
      }
      const resp = await axios.put(
        `https://coffee-clicker.herokuapp.com/api/Object/${Id}`,
        data
      )
    }
  }

  useEffect(() => {
    saveToServer()
  }, [])

  useEffect(() => {
    putToServer()
  }, [clicker, Worker, Keurig, Espresso])

  return (
    <>
      {/* {console.log(counter)} */}
      {/* 
        Small devices (landscape phones, 576px and up)
        Medium devices (tablets, 768px and up)
        Large devices (desktops, 992px and up)
        Extra large devices (large desktops, 1200px and up) 
        */}
      <div className="container text-center">
        <div className="top-container">
          <p>
            <span>Username</span> Coffee Shop
          </p>
          <p>
            <span>{Math.round(counter.totalIncome * 100) / 100}</span> Coffee's
            collected
          </p>
          <p>
            <span>{Math.ceil(counter.IncomePerSecond * 100) / 100}</span> Cups
            Per Second(CPS)
          </p>
        </div>
        <button
          className="btn btn-outline-dark"
          onClick={() => createCounter()}
        >
          <img
            src={Latest}
            className="coffee-image img-fluid"
            alt="White starbucks coffee cup"
          ></img>
        </button>

        <div className="container-fluid margin">
          <table className="table table-dark">
            <thead>
              <tr>
                <th></th>
                <th scope="col">Clicker</th>
                <th scope="col">Worker</th>
                <th scope="col">Keurig</th>
                <th scope="col">Espresso Machine</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Number Of</th>
                {ObjectArray.map((e, i) => {
                  return <Table p={e.numberOf} />
                })}
              </tr>
            </tbody>
            <tbody>
              <tr>
                <th>Cost</th>
                {ObjectArray.map((e, i) => {
                  return <Table p={Math.round(e.costOfASingle * 100) / 100} />
                })}
              </tr>
              <tr>
                <th>Purchase Button</th>
                <td>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      AddPerSecondClicker()
                    }}
                  >
                    Clicking
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      AddWorkerStats()
                    }}
                  >
                    Worker
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      AddKeurigStats()
                    }}
                  >
                    Keurig
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-outline-light"
                    onClick={() => {
                      AddEspressoStats()
                    }}
                  >
                    Espresso
                  </button>
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
