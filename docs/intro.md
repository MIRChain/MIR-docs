---
sidebar_position: 1
---

# Как начать?

### Пререквизиты
1. Linux
2. Go 1.20
3. Криптопро 5.0
4. Tmux
5. Git

### Как собрать?

1. Клонировать репозиторий
```bash
git clone https://github.com/MIRChain/MIR.git
```
2. Запустить сборку бинарных файлов
```bash
make all
```
Собранные файлы будут находиться в папке `MIR/build/bin`

### Как присоединится к публичным сетям?

Запустить `mir` со следующими флагами для синхронизации с mainnet/testnet сетью

 - для testnet:
 
 ```bash
./mir --crypto gost \
    --gostcurve id-GostR3410-2001-CryptoPro-A-ParamSet \
    --datadir node1 \
    --identity [твой_идентификатор] \
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

 Если присоединение к тестовой сети пройдет удачно то узел появится в списке на сайте мониторинга:

 http://194.87.80.101:3000

 - для mainnet:
 ```bash
 ./mir --crypto gost \
    --gostcurve id-GostR3410-2001-CryptoPro-A-ParamSet \
    --datadir node1 \
    --identity [твой_идентификатор] \
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

  Если присоединение к основной сети пройдет удачно то узел появится в списке на сайте мониторинга:

  http://194.87.253.126:3000
