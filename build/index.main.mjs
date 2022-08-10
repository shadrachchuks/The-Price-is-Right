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
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc2],
      2: [ctc0, ctc1, ctc2, ctc0, ctc1]
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
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v136 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v139 = stdlib.protect(ctc0, await interact.guessedPrice(), {
    at: './index.rsh:41:44:application',
    fs: ['at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'guessedPrice',
    who: 'Alice'
    });
  const v140 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:42:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:39:11:application call to [unknown function] (defined at: ./index.rsh:39:15:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v141 = stdlib.digest(ctc1, [v140, v139]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v136, v141],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:45:7:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc2],
    pay: [v136, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v144, v145], secs: v147, time: v146, didSend: v60, from: v143 } = txn1;
      
      sim_r.txns.push({
        amt: v144,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v144, v145], secs: v147, time: v146, didSend: v60, from: v143 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v71, from: v153 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v143, v144, v145, v153, v154, v140, v139],
    evt_cnt: 2,
    funcNum: 2,
    lct: v155,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:65:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v162, v163], secs: v165, time: v164, didSend: v81, from: v161 } = txn3;
      
      ;
      const v169 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:31:decimal', stdlib.UInt_max, '4'), v154);
      const v170 = stdlib.add(v163, v169);
      const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:68:48:decimal', stdlib.UInt_max, '3'));
      const v172 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      const v173 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
      const v174 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v176 = v173 ? v174 : v175;
      const v177 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v178 = v172 ? v177 : v176;
      const v179 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '0')];
      const v180 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '1')];
      const v181 = stdlib.mul(v179, v144);
      sim_r.txns.push({
        kind: 'from',
        to: v143,
        tok: undefined /* Nothing */
        });
      const v186 = stdlib.mul(v180, v144);
      sim_r.txns.push({
        kind: 'from',
        to: v153,
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
    tys: [ctc4, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v162, v163], secs: v165, time: v164, didSend: v81, from: v161 } = txn3;
  ;
  const v166 = stdlib.addressEq(v143, v161);
  stdlib.assert(v166, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v167 = stdlib.digest(ctc1, [v162, v163]);
  const v168 = stdlib.digestEq(v145, v167);
  stdlib.assert(v168, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:66:16:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v169 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:31:decimal', stdlib.UInt_max, '4'), v154);
  const v170 = stdlib.add(v163, v169);
  const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:68:48:decimal', stdlib.UInt_max, '3'));
  const v172 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v173 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v176 = v173 ? v174 : v175;
  const v177 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v178 = v172 ? v177 : v176;
  const v179 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '0')];
  const v180 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '1')];
  const v181 = stdlib.mul(v179, v144);
  ;
  const v186 = stdlib.mul(v180, v144);
  ;
  stdlib.protect(ctc3, await interact.seeResult(v171), {
    at: './index.rsh:82:23:application',
    fs: ['at ./index.rsh:81:5:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
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
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v144, v145], secs: v147, time: v146, didSend: v60, from: v143 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v144), {
    at: './index.rsh:53:23:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:13:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v152 = stdlib.protect(ctc0, await interact.guessedPrice(), {
    at: './index.rsh:54:52:application',
    fs: ['at ./index.rsh:52:9:application call to [unknown function] (defined at: ./index.rsh:52:13:function exp)'],
    msg: 'guessedPrice',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v143, v144, v145, v152],
    evt_cnt: 1,
    funcNum: 1,
    lct: v146,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v144, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v154], secs: v156, time: v155, didSend: v71, from: v153 } = txn2;
      
      sim_r.txns.push({
        amt: v144,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc1, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v154], secs: v156, time: v155, didSend: v71, from: v153 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v162, v163], secs: v165, time: v164, didSend: v81, from: v161 } = txn3;
  ;
  const v166 = stdlib.addressEq(v143, v161);
  stdlib.assert(v166, {
    at: './index.rsh:65:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v167 = stdlib.digest(ctc3, [v162, v163]);
  const v168 = stdlib.digestEq(v145, v167);
  stdlib.assert(v168, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:66:16:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v169 = stdlib.sub(stdlib.checkedBigNumberify('./index.rsh:68:31:decimal', stdlib.UInt_max, '4'), v154);
  const v170 = stdlib.add(v163, v169);
  const v171 = stdlib.mod(v170, stdlib.checkedBigNumberify('./index.rsh:68:48:decimal', stdlib.UInt_max, '3'));
  const v172 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
  const v173 = stdlib.eq(v171, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '2'));
  const v174 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v175 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v176 = v173 ? v174 : v175;
  const v177 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v178 = v172 ? v177 : v176;
  const v179 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '0')];
  const v180 = v178[stdlib.checkedBigNumberify('./index.rsh:74:7:array', stdlib.UInt_max, '1')];
  const v181 = stdlib.mul(v179, v144);
  ;
  const v186 = stdlib.mul(v180, v144);
  ;
  stdlib.protect(ctc2, await interact.seeResult(v171), {
    at: './index.rsh:82:23:application',
    fs: ['at ./index.rsh:81:5:application call to [unknown function] (defined at: ./index.rsh:81:23:function exp)'],
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
  appApproval: `BiAFAAECCCAmAgEAACI1ADEYQQIKKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAE6SSQMQADVJBJEJDQBEkQ0BEkiEkw0AhIRRChkSTUDSVcAIDX/IQRbNf5JNQVJIls1/SVbNfyABPMtCgw0/RZQNPwWULA0/zEAEkQ0A1coIDT9FjT8FlABEkQ0/IEENAOBaFsJCIEDGDX7gBAAAAAAAAAAAQAAAAAAAAABgBAAAAAAAAAAAAAAAAAAAAACNPskEk2AEAAAAAAAAAACAAAAAAAAAAA0+yISTTX6sSKyATT6Ils0/guyCCOyEDT/sgezsSKyATT6JVs0/guyCCOyEDQDV0ggsgezQgCySCM0ARJENARJIhJMNAISEUQoZEk1A0lJVwAgNf8hBFs1/lcoIDX9STUFFzX8gATVFRkUNPwWULA0/ogA4jT/NP4WUDT9UDEAUDT8FlAoSwFXAHBnSCQ1ATIGNQJCAG9IgaCNBogAuCI0ARJENARJIhJMNAISEURJNQVJIls1/1cIIDX+gAS03vNWNP8WUDT+ULA0/4gAiDEANP8WUDT+UChLAVcASGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkQkMTUSRCIxNhJEIjE3EkQiNQEiNQJC/680AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 112,
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
                "name": "v144",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v145",
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
                "name": "v144",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v145",
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
                "name": "v154",
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
                "name": "v162",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v163",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
                "name": "v154",
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
                "name": "v162",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v163",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000d7838038062000d78833981016040819052620000269162000235565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a16020810151516200009290341460076200012e565b620000c0604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b338082526020838101805151828501908152905182015160408086019182526001600081905543905580518085019590955291518483015251606080850191909152815180850390910181526080909301905281516200012592600292019062000158565b505050620002d2565b81620001545760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001669062000295565b90600052602060002090601f0160209004810192826200018a5760008555620001d5565b82601f10620001a557805160ff1916838001178555620001d5565b82800160010185558215620001d5579182015b82811115620001d5578251825591602001919060010190620001b8565b50620001e3929150620001e7565b5090565b5b80821115620001e35760008155600101620001e8565b604080519081016001600160401b03811182821017156200022f57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024957600080fd5b62000253620001fe565b835181526040601f19830112156200026a57600080fd5b62000274620001fe565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002aa57607f821691505b60208210811415620002cc57634e487b7160e01b600052602260045260246000fd5b50919050565b610a9680620002e26000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780638323075714610078578063873779a11461008d5780639014596a146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b34801561008457600080fd5b50600154610065565b61005261009b366004610809565b6100d6565b6100526100ae366004610821565b6102ef565b3480156100bf57600080fd5b506100c86105d3565b60405161006f929190610833565b6100e66001600054146009610670565b610100813515806100f957506001548235145b600a610670565b60008080556002805461011290610890565b80601f016020809104026020016040519081016040528092919081815260200182805461013e90610890565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a391906108e1565b6040805133815284356020808301919091528501358183015290519192507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f7225919081900360600190a16101fd816020015134146008610670565b6102416040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516102c59183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b604051602081830303815290604052600290805190602001906102e9929190610699565b50505050565b6102ff600260005414600e610670565b6103198135158061031257506001548235145b600f610670565b60008080556002805461032b90610890565b80601f016020809104026020016040519081016040528092919081815260200182805461035790610890565b80156103a45780601f10610379576101008083540402835291602001916103a4565b820191906000526020600020905b81548152906001019060200180831161038757829003601f168201915b50505050508060200190518101906103bc9190610950565b90506103c661071d565b604080513381528435602080830191909152850135818301529084013560608201527feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e19699060800160405180910390a16104213415600b610670565b8151610439906001600160a01b03163314600c610670565b604080516104859161045f91602080880135928801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836040015114600d610670565b60038260800151600461049891906109f0565b6104a6906040860135610a07565b6104b09190610a1f565b81526020808201805160009081905290516002908301819052604084018051600190819052905184015260608401805191909152519091015280511561050d578051600214610503578060400151610513565b8060200151610513565b80606001515b608082018190528251602084015191516001600160a01b03909116916108fc9161053d9190610a41565b6040518115909202916000818181858888f19350505050158015610565573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc836020015183608001516020015161058f9190610a41565b6040518115909202916000818181858888f193505050501580156105b7573d6000803e3d6000fd5b50600080805560018190556105ce906002906107b7565b505050565b6000606060005460028080546105e890610890565b80601f016020809104026020016040519081016040528092919081815260200182805461061490610890565b80156106615780601f1061063657610100808354040283529160200191610661565b820191906000526020600020905b81548152906001019060200180831161064457829003601f168201915b50505050509050915091509091565b816106955760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546106a590610890565b90600052602060002090601f0160209004810192826106c7576000855561070d565b82601f106106e057805160ff191683800117855561070d565b8280016001018555821561070d579182015b8281111561070d5782518255916020019190600101906106f2565b506107199291506107f4565b5090565b6040518060a001604052806000815260200161074c604051806040016040528060008152602001600081525090565b815260200161076e604051806040016040528060008152602001600081525090565b8152602001610790604051806040016040528060008152602001600081525090565b81526020016107b2604051806040016040528060008152602001600081525090565b905290565b5080546107c390610890565b6000825580601f106107d3575050565b601f0160209004906000526020600020908101906107f191906107f4565b50565b5b8082111561071957600081556001016107f5565b60006040828403121561081b57600080fd5b50919050565b60006060828403121561081b57600080fd5b82815260006020604081840152835180604085015260005b818110156108675785810183015185820160600152820161084b565b81811115610879576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806108a457607f821691505b6020821081141561081b57634e487b7160e01b600052602260045260246000fd5b80516001600160a01b03811681146108dc57600080fd5b919050565b6000606082840312156108f357600080fd5b6040516060810181811067ffffffffffffffff8211171561092457634e487b7160e01b600052604160045260246000fd5b604052610930836108c5565b815260208301516020820152604083015160408201528091505092915050565b600060a0828403121561096257600080fd5b60405160a0810181811067ffffffffffffffff8211171561099357634e487b7160e01b600052604160045260246000fd5b60405261099f836108c5565b815260208301516020820152604083015160408201526109c1606084016108c5565b6060820152608083015160808201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b600082821015610a0257610a026109da565b500390565b60008219821115610a1a57610a1a6109da565b500190565b600082610a3c57634e487b7160e01b600052601260045260246000fd5b500690565b6000816000190483118215151615610a5b57610a5b6109da565b50029056fea26469706673582212205afb54c74c62fa8bfd32f114af1b8f34ef46b01cacbf87812d921217ff12c1fd64736f6c634300080c0033`,
  BytecodeLen: 3448,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:46:9:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:57:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:78:9:after expr stmt semicolon',
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
