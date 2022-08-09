// Automatically generated with Reach 0.1.11 (7d2358ff)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (7d2358ff)';
export const _backendVersion = 17;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  
  
  const v83 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v86 = stdlib.protect(ctc0, await interact.guessedPrice(), {
    at: './index.rsh:31:54:application',
    fs: ['at ./index.rsh:29:11:application call to [unknown function] (defined at: ./index.rsh:29:15:function exp)'],
    msg: 'guessedPrice',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v86, v83],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:33:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v83, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v88, v89], secs: v91, time: v90, didSend: v32, from: v87 } = txn1;
      
      sim_r.txns.push({
        amt: v89,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v32, from: v87 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v43, from: v97 } = txn2;
  ;
  const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:47:31:decimal', stdlib.UInt_max, '4'), v98);
  const v104 = stdlib.add(v88, v103);
  const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:47:48:decimal', stdlib.UInt_max, '3'));
  const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:38:decimal', stdlib.UInt_max, '2'));
  const v107 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:63:decimal', stdlib.UInt_max, '0'));
  const v108 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v110 = v107 ? v108 : v109;
  const v111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v112 = v106 ? v111 : v110;
  const v113 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '0')];
  const v114 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '1')];
  const v115 = stdlib.mul(v113, v89);
  ;
  const v120 = stdlib.mul(v114, v89);
  ;
  stdlib.protect(ctc1, await interact.seeResult(v105), {
    at: './index.rsh:62:23:application',
    fs: ['at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:61:23:function exp)'],
    msg: 'seeResult',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v88, v89], secs: v91, time: v90, didSend: v32, from: v87 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.acceptWager(v89), {
    at: './index.rsh:42:23:application',
    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v96 = stdlib.protect(ctc0, await interact.guessedPrice(), {
    at: './index.rsh:43:52:application',
    fs: ['at ./index.rsh:41:9:application call to [unknown function] (defined at: ./index.rsh:41:13:function exp)'],
    msg: 'guessedPrice',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v87, v88, v89, v96],
    evt_cnt: 1,
    funcNum: 1,
    lct: v90,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v89, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98], secs: v100, time: v99, didSend: v43, from: v97 } = txn2;
      
      sim_r.txns.push({
        amt: v89,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:47:31:decimal', stdlib.UInt_max, '4'), v98);
      const v104 = stdlib.add(v88, v103);
      const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:47:48:decimal', stdlib.UInt_max, '3'));
      const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:38:decimal', stdlib.UInt_max, '2'));
      const v107 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:63:decimal', stdlib.UInt_max, '0'));
      const v108 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v110 = v107 ? v108 : v109;
      const v111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v112 = v106 ? v111 : v110;
      const v113 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '0')];
      const v114 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '1')];
      const v115 = stdlib.mul(v113, v89);
      sim_r.txns.push({
        kind: 'from',
        to: v87,
        tok: undefined /* Nothing */
        });
      const v120 = stdlib.mul(v114, v89);
      sim_r.txns.push({
        kind: 'from',
        to: v97,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v98], secs: v100, time: v99, didSend: v43, from: v97 } = txn2;
  ;
  const v103 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:47:31:decimal', stdlib.UInt_max, '4'), v98);
  const v104 = stdlib.add(v88, v103);
  const v105 = stdlib.mod(v104, stdlib.checkedBigNumberify('./index.rsh:47:48:decimal', stdlib.UInt_max, '3'));
  const v106 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:38:decimal', stdlib.UInt_max, '2'));
  const v107 = stdlib.eq(v105, stdlib.checkedBigNumberify('./index.rsh:53:63:decimal', stdlib.UInt_max, '0'));
  const v108 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v109 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v110 = v107 ? v108 : v109;
  const v111 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v112 = v106 ? v111 : v110;
  const v113 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '0')];
  const v114 = v112[stdlib.checkedBigNumberify('./index.rsh:53:7:array', stdlib.UInt_max, '1')];
  const v115 = stdlib.mul(v113, v89);
  ;
  const v120 = stdlib.mul(v114, v89);
  ;
  stdlib.protect(ctc1, await interact.seeResult(v105), {
    at: './index.rsh:62:23:application',
    fs: ['at ./index.rsh:61:5:application call to [unknown function] (defined at: ./index.rsh:61:23:function exp)'],
    msg: 'seeResult',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEIAiYCAAEAIjUAMRhBAYYoZEkiWzUBJFs1AjYaABdJQQAHIjUEIzUGADYaAhc1BDYaAzYaARdJIwxAALUjEkQjNAESRDQESSISTDQCEhFEKWRJNQOBKFs1/0k1BRc1/oAE1RUZFDT+FlCwNP+IAUM0A4EgW4EENP4JCIEDGDX9gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNP0iEk2AEAAAAAAAAAACAAAAAAAAAAA0/SUSTTX8sSKyATT8Ils0/wuyCCOyEDQDVwAgsgezsSKyATT8JFs0/wuyCCOyEDEAsgezQgBUSIGgjQaIALkiNAESRDQESSISTDQCEhFESTUFSSJbNf8kWzX+gASs0R/DNP8WUDT+FlCwNP6IAIkxADT/FlA0/hZQKUsBVwAwZ0gjNQEyBjUCQgAcMRmBBRJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKDQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRCUxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rzQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 48,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v88",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v89",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v98",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516109853803806109858339810160408190526100229161021e565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015161008e9034146007610126565b6100bb604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b3380825260208381018051518285019081529051820151604080860191825260016000819055439055805180850195909552915184830152516060808501919091528151808503909101815260809093019052815161011e92600292019061014f565b5050506102b3565b8161014b5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461015b90610278565b90600052602060002090601f01602090048101928261017d57600085556101c3565b82601f1061019657805160ff19168380011785556101c3565b828001600101855582156101c3579182015b828111156101c35782518255916020019190600101906101a8565b506101cf9291506101d3565b5090565b5b808211156101cf57600081556001016101d4565b604080519081016001600160401b038111828210171561021857634e487b7160e01b600052604160045260246000fd5b60405290565b6000818303606081121561023157600080fd5b6102396101e8565b835181526040601f198301121561024f57600080fd5b6102576101e8565b60208581015182526040909501518582015293810193909352509092915050565b600181811c9082168061028c57607f821691505b602082108114156102ad57634e487b7160e01b600052602260045260246000fd5b50919050565b6106c3806102c26000396000f3fe6080604052600436106100405760003560e01c80631e93b0f114610049578063832307571461006d578063873779a114610082578063ab53f2c61461009557005b3661004757005b005b34801561005557600080fd5b506003545b6040519081526020015b60405180910390f35b34801561007957600080fd5b5060015461005a565b6100476100903660046104e1565b6100b8565b3480156100a157600080fd5b506100aa61032b565b6040516100649291906104f9565b6100c860016000541460096103c8565b6100e2813515806100db57506001548235145b600a6103c8565b6000808055600280546100f490610556565b80601f016020809104026020016040519081016040528092919081815260200182805461012090610556565b801561016d5780601f106101425761010080835404028352916020019161016d565b820191906000526020600020905b81548152906001019060200180831161015057829003601f168201915b5050505050806020019051810190610185919061058b565b905061018f6103f1565b6040805133815284356020808301919091528501358183015290517f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72259181900360600190a16101e58260400151341460086103c8565b60036101f66020850135600461061d565b83602001516102059190610634565b61020f919061064c565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805182905251909201528151146102695780511561025f57806040015161026f565b806020015161026f565b80606001515b608082018190528251604084015191516001600160a01b03909116916108fc91610299919061066e565b6040518115909202916000818181858888f193505050501580156102c1573d6000803e3d6000fd5b50336001600160a01b03166108fc83604001518360800151602001516102e7919061066e565b6040518115909202916000818181858888f1935050505015801561030f573d6000803e3d6000fd5b50600080805560018190556103269060029061048b565b505050565b60006060600054600280805461034090610556565b80601f016020809104026020016040519081016040528092919081815260200182805461036c90610556565b80156103b95780601f1061038e576101008083540402835291602001916103b9565b820191906000526020600020905b81548152906001019060200180831161039c57829003601f168201915b50505050509050915091509091565b816103ed5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b6040518060a0016040528060008152602001610420604051806040016040528060008152602001600081525090565b8152602001610442604051806040016040528060008152602001600081525090565b8152602001610464604051806040016040528060008152602001600081525090565b8152602001610486604051806040016040528060008152602001600081525090565b905290565b50805461049790610556565b6000825580601f106104a7575050565b601f0160209004906000526020600020908101906104c591906104c8565b50565b5b808211156104dd57600081556001016104c9565b5090565b6000604082840312156104f357600080fd5b50919050565b82815260006020604081840152835180604085015260005b8181101561052d57858101830151858201606001528201610511565b8181111561053f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061056a57607f821691505b602082108114156104f357634e487b7160e01b600052602260045260246000fd5b60006060828403121561059d57600080fd5b6040516060810181811067ffffffffffffffff821117156105ce57634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146105e857600080fd5b8152602083810151908201526040928301519281019290925250919050565b634e487b7160e01b600052601160045260246000fd5b60008282101561062f5761062f610607565b500390565b6000821982111561064757610647610607565b500190565b60008261066957634e487b7160e01b600052601260045260246000fd5b500690565b600081600019048311821515161561068857610688610607565b50029056fea26469706673582212205562d74f29a3e3363afa140a7a58624a891fc8dd46feaa9097193529a907be1264736f6c634300080c0033`,
  BytecodeLen: 2437,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:34:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:58:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
