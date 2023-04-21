---
sidebar_position: 1
---

# Майнить MIR


### Как майнить на тестовой сети?

После сборки исполняемы файлы находятся в папаке `MIR/build/bin`


1. Необходимо создать аккаунт который будет получать вознаграждение за созданные блоки - тип криптографии ГОСТ

 ```bash
 ./mir --crypto gost account new --datadir node1
 ```
  **ВАЖНО: запомнить пароль !!!**

 Запустить `mir` с дополнительными флагами `  --mine --miner.threads=6`

 При этом `--miner.threads` количество потоков CPU которые необходимо выделить под майнинг

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

 Если присоединение к тестовой сети пройдет удачно то узел появится в списке на сайте мониторинга:

 http://194.87.80.101:3000

### Как майнить на мэйннет сети?

1. Необходимо создать аккаунт который будет получать вознаграждение за созданные блоки - тип криптографии ГОСТ

 ```bash
 ./mir --crypto gost account new --datadir node1
 ```

 **ВАЖНО: запомнить пароль !!!**

  Запустить `mir` с дополнительными флагами `  --mine --miner.threads=6`

 При этом `--miner.threads` количество потоков CPU которые необходимо выделить под майнинг

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

  Если присоединение к основной сети пройдет удачно то узел появится в списке на сайте мониторинга:

  http://194.87.253.126:3000
