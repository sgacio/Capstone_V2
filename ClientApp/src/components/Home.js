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
    amountSpent: 0,
    IncomePerSecond: 0
  })

  const [clicker, setClicker] = useState({
    costOfASingle: 40,
    IncomePerSecond: 0.1,
    numberOf: 0
  })

  const [Worker, setWorker] = useState({
    costOfASingle: 540,
    IncomePerSecond: 0.4,
    numberOf: 0
  })

  const [Keurig, setKeurig] = useState({
    costOfASingle: 7000,
    IncomePerSecond: 0.6,
    numberOf: 0
  })

  const [Espresso, setEspresso] = useState({
    costOfASingle: 20000,
    IncomePerSecond: 0.9,
    numberOf: 0
  })

  const ObjectArray = [clicker, Worker, Keurig, Espresso]

  const [Id, setId] = useState()
  const [shop, setShop] = useState()

  const createCounter = () => {
    setCounter(prev => {
      counter.totalIncome += 1
      return { ...prev }
    })
  }

  const AddPerSecondClicker = () => {
    if (counter.totalIncome >= clicker.costOfASingle) {
      giveMeSeconds(clicker)
      multiply(setClicker)
      increment(setClicker)
      decreaseTotalIncome(setCounter, 'totalIncome', clicker, 'costOfASingle')
      increaseTotalSpent(setCounter, 'amountSpent', clicker, 'costOfASingle')
    }
  }

  const AddWorkerStats = () => {
    if (clicker.numberOf >= 10 && counter.totalIncome >= Worker.costOfASingle) {
      giveMeSeconds(Worker)
      multiply(setWorker)
      increment(setWorker)
      decreaseTotalIncome(setCounter, 'totalIncome', Worker, 'costOfASingle')
      increaseTotalSpent(setCounter, 'amountSpent', Worker, 'costOfASingle')
    }
  }

  const AddKeurigStats = () => {
    if (Worker.numberOf >= 10 && counter.totalIncome >= Keurig.costOfASingle) {
      giveMeSeconds(Keurig)
      multiply(setKeurig)
      increment(setKeurig)
      decreaseTotalIncome(setCounter, 'totalIncome', Keurig, 'costOfASingle')
      increaseTotalSpent(setCounter, 'amountSpent', Keurig, 'costOfASingle')
    }
  }

  const AddEspressoStats = () => {
    if (
      Keurig.numberOf >= 10 &&
      counter.totalIncome >= Espresso.costOfASingle
    ) {
      giveMeSeconds(Espresso)
      multiply(setEspresso)
      increment(setEspresso)
      decreaseTotalIncome(setCounter, 'totalIncome', Espresso, 'costOfASingle')
      increaseTotalSpent(setCounter, 'amountSpent', Espresso, 'costOfASingle')
    }
  }

  const giveMeSeconds = key => {
    setCounter(prev => {
      counter.IncomePerSecond += key.IncomePerSecond
      return { ...prev }
    })
  }

  const multiply = set => {
    set(prev => {
      prev.costOfASingle *= 1.28
      return { ...prev }
    })
  }

  const increment = set => {
    set(prev => {
      prev.numberOf += 1
      return { ...prev }
    })
  }

  const decreaseTotalIncome = (set, key, kai, ken) => {
    set(prev => {
      prev[key] -= kai[ken]
      return { ...prev }
    })
  }

  const increaseTotalSpent = (set, key, kai, ken) => {
    set(prev => {
      prev[key] += kai[ken]
      return { ...prev }
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

    const resp = await axios.put(`/api/Game/${Id}`, data)
  }

  const sendPlayerIdToSingleGameSave = async id => {
    const resp = await axios.post('/api/Player_Game', {
      PlayerId: props.match.params.id,
      ObjectId: id
    })
  }

  const saveToServer = async () => {
    const data = {
      counter: JSON.stringify(counter),
      clicker: JSON.stringify(clicker),
      worker: JSON.stringify(Worker),
      Keurig: JSON.stringify(Keurig),
      EspressoMachine: JSON.stringify(Espresso)
    }

    const resp = await axios.post('/api/Game', data)

    setId(resp.data.id)
    console.log(resp.data.id)
    console.log(resp.data)
    sendPlayerIdToSingleGameSave(resp.data.id)
    // shopName(resp.data.id)
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
      const resp = await axios.put(`/api/Game/${Id}`, data)
    }
  }

  const shopName = async () => {
    const resp = await axios.get(`/api/Player/${props.match.params.id}`)
    console.log(resp)
    setShop(resp.data.properName)
  }

  useEffect(() => {
    saveToServer()
    shopName()
  }, [])

  useEffect(() => {
    putToServer()
  }, [clicker, Worker, Keurig, Espresso])

  return (
    <div>
      {console.log(counter)}

      <div className="container text-center">
        <div className="parent">
          <div className="top-container card text-white bg-dark">
            <p>
              <h7>{shop}'s</h7> Coffee Shop
            </p>
            <p>
              <span>{Math.round(counter.totalIncome * 100) / 100}</span>{' '}
              Coffee's collected
            </p>
            <p>
              <span>{Math.ceil(counter.IncomePerSecond * 100) / 100}</span> Cups
              Per Second(CPS)
            </p>
          </div>
          <div className="button-container">
            <button className="btn btn-dark" onClick={() => createCounter()}>
              <img
                src={Latest}
                className="coffee-image img-fluid"
                alt="White starbucks coffee cup"
              ></img>
            </button>
          </div>
        </div>

        <div className="card-deck">
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h5>Clicker</h5>
              <p>
                Number Owned <span>{clicker.numberOf}</span>
              </p>
              <p>
                Price{' '}
                <span>{Math.round(clicker.costOfASingle * 100) / 100}</span>
              </p>
              <i
                class="fas fa-info-circle m-1"
                title="Clickers help you produce coffee per second, buy 10 clickers in order to purchase a worker."
              ></i>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  AddPerSecondClicker()
                }}
              >
                Clicking
              </button>
            </div>
          </div>
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h5>Employee</h5>
              <p>
                Number Owned <span>{Worker.numberOf}</span>
              </p>
              <p>
                Price{' '}
                <span>{Math.round(Worker.costOfASingle * 100) / 100}</span>
              </p>
              <i
                class="fas fa-info-circle m-1"
                title="Every business needs hard working employees, buy 10 employees to unlock purchasing Keurigs."
              ></i>
              <button
                className="btn btn-secondary "
                onClick={() => {
                  AddWorkerStats()
                }}
              >
                Worker
              </button>
            </div>
          </div>
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h5>Keurig</h5>
              <p>
                Number Owned <span>{Keurig.numberOf}</span>
              </p>
              <p>
                Price{' '}
                <span>{Math.round(Keurig.costOfASingle * 100) / 100}</span>
              </p>
              <i
                class="fas fa-info-circle m-1"
                title="Keurigs are efficient and make a consistent cup of coffee, buy 10 in order to start buying Espresso Machines ."
              ></i>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  AddKeurigStats()
                }}
              >
                Keurig
              </button>
            </div>
          </div>
          <div className="card text-white bg-dark">
            <div className="card-body">
              <h5>Espresso Machine</h5>
              <p>
                Number Owned <span>{Espresso.numberOf}</span>
              </p>
              <p>
                Price{' '}
                <span>{Math.round(Espresso.costOfASingle * 100) / 100}</span>
              </p>
              <i
                class="fas fa-info-circle m-1"
                title="Espresso Machines are the epitome of a classic coffee shop, congratulations on making it here. Buy whatever you want just make sure you have enough coffee!"
              ></i>
              <button
                className="btn btn-secondary"
                onClick={() => {
                  AddEspressoStats()
                }}
              >
                Espresso
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
