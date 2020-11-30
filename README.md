ti-nn は電磁レンジの音を鳴らします。
他には何もしません。
他のコマンドと組み合わせて、タスクの終了を検知する目的でお使いください。

## Install
npm install tinntinn

## Usage
apiから値が帰って来たら電子レンジの音を鳴らす
curl https://swapi.dev/api/people/1/ && tinntinn

何か重いタスクが終わったら電子レンジの音を鳴らす
思いタスク && tinntinn

