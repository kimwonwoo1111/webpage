<div align=center>

![header](https://capsule-render.vercel.app/api?type=Blur&color=auto&fontColor=d6ace6&height=300&section=header&text=과제2%&fontSize=90)

#

![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
  
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&pause=2000&color=F7F524&width=250&lines=top%2C+ps%2C+jobs%2C+kill)](https://git.io/typing-svg)

![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)


</div>


# top
`top` 명령어는 실시간으로 시스템의 **프로세스 상태**, **CPU 사용량**, **메모리 사용량** 등을 모니터링할 때 사용한다.

### 주요 기능
- 요약 정보 (Summary area)

|제목|내용|
|:---:|:---:|
|uptime|시스템이 가동된 시간|
|users|현재 로그인된 사용자 수|
|load average|시스템 평균 부하|
|Tasks|총 작업 수, 실행 중인 작업 수, 대기 중인 작업 수 등|
|%Cpu(s)|CPU 사용률 (사용자 모드 us, 시스템 모드 sy, 유휴 id 등)|

- 실시간 프로세스 목록 확인

|제목|내용|
|:---:|:---:|
|PID|프로세스 ID|
|USER|프로세스를 실행한 사용자|
|%CPU|프로세스의 CPU 사용률|
|%MEM|프로세스의 메모리 사용률|
|COMMAND|실행 중인 명령어|

### 기본 사용법
```bash
top -n 1 # top을 한 번만 실행하고 결과를 출력합니다. 스크립트에서 CPU 사용률을 확인할 때 유용합니다.
```
```bash
top -d 3 # 3초 간격으로 정보를 갱신합니다. (기본값은 3초입니다.)
```
```bash
top -p <PID> # 특정 프로세스 ID(PID)의 정보만 봅니다.
```
```bash
top 실행 중 M # 메모리 사용량 순으로 정렬합니다.
```
```bash
top 실행 중 P # CPU 사용량 순으로 정렬합니다.
```
```bash
top 실행 중 h 또는 man top # 도움말을 확인합니다.
```
