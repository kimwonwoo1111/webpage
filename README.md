<div align=center>

![header](https://capsule-render.vercel.app/api?type=Blur&color=auto&fontColor=d6ace6&height=300&section=header&text=과제2%&fontSize=90)

---

![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
  
[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&pause=2000&color=F7F524&width=250&lines=top%2C+ps%2C+jobs%2C+kill)](https://git.io/typing-svg)

![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)
![js](https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black)

---

</div>

# top

`top` 명령어는 실시간으로 시스템의 **프로세스 상태**, **CPU 사용량**, **메모리 사용량** 등을 모니터링할 때 사용한다.

### 주요 기능
- 요약 정보 (Summary area)

|입력|출력|
|:---:|:---:|
|uptime|시스템이 가동된 시간|
|users|현재 로그인된 사용자 수|
|load average|시스템 평균 부하|
|Tasks|총 작업 수, 실행 중인 작업 수, 대기 중인 작업 수 등|
|%Cpu(s)|CPU 사용률 (사용자 모드 us, 시스템 모드 sy, 유휴 id 등)|

#

- 실시간 프로세스 목록 확인

|입력|출력|
|:---:|:---:|
|PID|프로세스 ID|
|USER|프로세스를 실행한 사용자|
|%CPU|프로세스의 CPU 사용률|
|%MEM|프로세스의 메모리 사용률|
|COMMAND|실행 중인 명령어|

#

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

# ps
`ps`명령어는 **현재 실행 중인 프로세스 목록을 출력하는 명령어**로, 리눅스 시스템에서 프로세스 상태를 확인할 때 사용한다.

### 주요 옵션

- **ps** **aux** : 시스템의 모든 프로세스를 사용자와 관계없이 전체 출력한다.

```bash
ps aux
```

  |출력|정보|
  |:---:|:---:|
  |USER| 프로세스 실행 사용자 |
  |PID| 프로세스 ID |
  |%CPU| CPU 사용량 |
  |%MEM| 메모리 사용량 |
  |STAT| 프로세스 상태 |
  |COMMAND| 실행된 명령어 |

#

- **ps** **-ef** : 표준 UNIX 스타일의 전체 프로세스 목록을 보여준다.

```bash
ps -ef
```

  |출력|정보|
  |:---:|:---:|
  |UID| 사용자 |
  |PID| 프로세스 ID |
  |PPID| 부모 프로세스 ID |
  |STIME| 시작 시간 |
  |CMD| 실행 명령어 전체 |

#

- **grep** : aux -ef와 함께 사용해 원하는 프로세스를 찾는다.

#### 예시
```bash
ps aux | grep python
ps -ef | grep nginx
```

#### 자주 쓰는 패턴
```bash
ps aux | grep <process-name> # 현재 실행 중인 특정 프로그램 찾기
```

```bash
ps -p <PID> # PID 기반으로 확인하기
```

```bash
ps -ef --forest # 트리 구조로 프로세스 보기
```

# jobs
`jobs` 명령어는 **현재 터미널에서 실행 중이거나 멈춘 작업(Job) 목록을 확인하는 명령어**이다. 백그라운드(`&`) 또는 Ctrl+Z로 중지한 작업들을 관리할 때 사용한다.
`jobs`는 **현재 쉘에서만** 보이는 작업을 보여준다는 점에서 시스템 전체 프로세스를 보여주는 `ps`와 다르다.

### 기본 사용법

```bash
jobs
```

### 주요 출력 상태
  
  |출력|상태|
  |:---:|:---:|
  |**Running**| 백그라운드에서 실행 중 |
  |**Stopped**| Ctrl+Z로 일시 중지된 작업 |
  |**Done**| 작업이 정상적으로 종료 |
#

### 자주 쓰는 패턴

```bash
command & # 백그라운드로 실행
```

```bash
^Z # 실행 중 작업 중지 (Ctrl + Z)
```

```bash
fg %1 # 중지된 작업을 포그라운드로 불러오기
```

```bash 
bg %1 # 중지된 작업을 백그라운드로 다시 실행
```


# kill
`kill` 명령어는 특정 프로세스에 **종료 신호(Signal)** 를 보내는 명령어이다. 프로세스를 정상 종료하거나, 강제로 종료하거나, 일시 중지시키는 등 다양한 제어가 가능하다.

### 기본 사용법
```bash
kill <PID>
```
```bash
kill -SIGNAL <PID>
```

#

### 자주 사용하는 Signal

  |번호|이름|설명|
  |:---:|:---:|:---:|
  |15| SIGTERM | 기본 종료 요청(정상 종료) |
  |9| SIGKILL | 강제 종료. 즉시 종료 |
  |2| SIGINT | Ctrl + C와 동일 |
  |19| SIGSTOP | 프로세스 일시 중지 |
  |18| SIGCONT | 중지된 프로세스 다시 실행 |

#

### 실전 사용 예시

```bash
kill 1234        # 기본 종료 (SIGTERM)
```
```bash
kill -9 1234     # 강제 종료 (SIGKILL)
```
```bash
kill -15 1234    # 정상 종료 요청 (SIGTERM)
```
```bash
kill -STOP 1234  # 중지시키기
```
```bash
kill -CONT 1234  # 중지된 프로세스 다시 실행
```

- ps / grep과 함께 사용 : kill은 보통 ps, top, jobs와 함께 사용한다.
```bash
ps aux | grep python # 프로세스 찾기
kill 8123            # 프로세스 종료
```

#
