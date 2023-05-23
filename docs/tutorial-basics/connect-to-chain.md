---
sidebar_position: 1
---

# Connect to MIR manually

### Prerequisites
1. Linux
2. Go 1.20
4. Tmux
5. Git

### How to build?

1. Clone repo
```bash
git clone https://github.com/MIRChain/MIR.git
```
2. Compile biniries
```bash
make all
```
Builded biniries is stored at `MIR/build/bin`

### How to connect to public nets?

Run `mir` with following flags to connect to GOST testnet/mainnets

 - for testnet:
 
 ```bash
./mir --crypto gost \
    --gostcurve id-GostR3410-2001-CryptoPro-A-ParamSet \
    --datadir node1 \
    --identity [your_identity] \
    --syncmode full \
    --gcmode=archive \
    --port 30312 \
    --soyuz \
    --ethstats node1:soyuz@194.87.80.101:3000 \
    --ws \
    --ws.addr 0.0.0.0 \
    --ws.port 8546 \
    --ws.origins "*" \
    --http \
    --http.addr 0.0.0.0 \
    --http.port 8545 \
    --http.corsdomain "*" \
    --http.api personal,eth,net,web3,txpool,miner,admin \
    --verbosity 4
 ```

 Node monitoring of tesetnet:

 http://194.87.80.101:3000

 - for mainnet:
 ```bash
 ./mir --crypto gost \
    --gostcurve id-GostR3410-2001-CryptoPro-A-ParamSet \
    --datadir node1 \
    --identity [your_identity] \
    --syncmode full \
    --gcmode=archive \
    --port 30312 \
    --mainnet \
    --ethstats node1:buran@194.87.253.126:3000 \
    --ws \
    --ws.addr 0.0.0.0 \
    --ws.port 8546 \
    --ws.origins "*" \
    --http \
    --http.addr 0.0.0.0 \
    --http.port 8545 \
    --http.corsdomain "*" \
    --http.api personal,eth,net,web3,txpool,miner,admin \
    --verbosity 4
 ```

Node monitoring of mainnet:

  http://194.87.253.126:3000

### How to start mining manually through CLI?

Bins are stored here `MIR/build/bin`


1. Create a GOST Ethereum account

 ```bash
 ./mir --crypto gost account new --datadir node1
 ```
  **Important:remember the passwors !!!**

 2. Run `mir` with flags `  --mine --miner.threads=6`

 `--miner.threads` number of CPU threads for mining

 ```bash
./mir --crypto gost \
    --gostcurve id-GostR3410-2001-CryptoPro-A-ParamSet \
    --datadir node1 \
    --identity [your_identity] \
    --syncmode full \
    --gcmode=archive \
    --port 30312 \
    --soyuz \
    --ethstats node1:soyuz@194.87.80.101:3000 \
    --mine \
    --miner.threads=4 \
    --ws \
    --ws.addr 0.0.0.0 \
    --ws.port 8546 \
    --ws.origins "*" \
    --http \
    --http.addr 0.0.0.0 \
    --http.port 8545 \
    --http.corsdomain "*" \
    --http.api personal,eth,net,web3,txpool,miner,admin \
    --verbosity 4
 ```

