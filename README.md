# Getting Started

### 1. clone project
```
$ git clone https://github.com/HyeokE/healthCare
```
### 2. init project

```
$ yarn install && yarn
```

### 3. run project

```angular2html
yarn start
```

## 구현목록

### Table 

- [x]  Table component
- [x]  환자 정보 확인
- [x]  페이지 당 row 개수 설정
- [x]  pagination
- [x]  환자 상세정보 확인
- [ ]  환자 sort 기능
- [x]  환자 filter 기능 
(일부 구현 작동은 안됨)

### Graph

- [ ]  Graph component


## 폴더 구조

```angular2html
├── src
│   ├── App.tsx
│   ├── index.tsx
│   ├── react-app-env.d.ts
│   ├── apis
│   │   ├── hooks
│   │   │   ├── useGetPatientList.ts
│   │   │   └── usePatientDetail.ts
│   │   └── index.ts
│   ├── components
│   │   └── common
│   │       ├── SelectBox
│   │       │   └── index.tsx
│   │       ├── Table
│   │       │   ├── index.tsx
│   │       │   └── styled.ts
│   │       └── TableDetailRow
│   │           ├── index.tsx
│   │           └── styled.ts
│   ├── store
│   │   └── filter.ts
│   ├── styles
│   │   ├── colors.ts
│   │   ├── declearations.ts
│   │   ├── fontSize.ts
│   │   ├── globalStyles.ts
│   │   ├── layouts.ts
│   │   ├── theme.ts
│   │   └── windowSize.ts
│   └── types
│       ├── patientBriefType.d.ts
│       ├── patientFilterType.ts
│       └── patientListType.d.ts
├── tsconfig.json
└── yarn.lock

```