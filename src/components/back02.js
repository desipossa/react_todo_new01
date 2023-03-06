import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
    BorderListTable,
    BtnArea,
    DefaultBtn,
    DefaultInput,
    DivMaxWrap,
    H1,
    SubTitle,
    TableWrap,
} from 'styled/styles';
import useApi from 'hooks/useApi';
import { Default_Select, LinkCustom } from '../styles';
import axios from 'axios';

const AzureForm = () => {
    const [url, setUrl] = useState(/account/azure ? form);
    const [loading, setLoading] = useState(false);
    // const [val, setVal] = useState(null);
    const [inputs, setInputs] = useState({
        auzreGubun: 'exchange',
        accountId: '',
        clientId: '',
        tenentId: '',
        secretKey: '',
        tokenString: '',
        individualId: '',
        volume: '',
    });
    const {
        auzreGubun,
        accountId,
        clientId,
        tenentId,
        secretKey,
        tokenString,
        individualId,
        volume,
    } = inputs;

    const inputRef = useRef([]);

    const data = useApi(url);
    const { centerData } = data;

    const onChange = useCallback(
        (e) => {
            const { value, name } = e.target;
            setInputs({
                ...inputs,
                [name]: value,
            });
        },
        [inputs],
    );

    const onSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            if (loading) {
                return false;
            }
            /*    if (auzreGubun === '0') {
              for (let i = 0; i < inputRef.current.length; i++) {
                if (inputRef.current[i].value === ''  !inputRef.current[i].value.trim()) {
                  alert(inputRef.current[i].title + '를 입력해주세요');
                  inputRef.current[i].focus();
                  return false;
                }
              }
            } else {
              for (let i = 0; i < inputRef.current.length + 1; i++) {
                if (inputRef.current[i].value === ''  !inputRef.current[i].value.trim()) {
                  alert(inputRef.current[i].title + '를 입력해주세요');
                  inputRef.current[i].focus();
                  return false;
                }
              }
            }*/

            try {
                setLoading(true);
                const response = await axios.post(
                    '/account',
                    {
                        aid: 'azure',
                        azureGubun: auzreGubun,
                        accountId: accountId,
                        clientId: clientId,
                        tenentId: tenentId,
                        secretKey: secretKey,
                        tokenString: tokenString,
                        individualId: individualId,
                        volume: volume,
                    },
                    { headers: { 'Content-Type': application / json } },
                );

                setInputs({
                    auzreGubun: 'exchange',
                    accountId: '',
                    clientId: '',
                    tenentId: '',
                    secretKey: '',
                    tokenString: '',
                    individualId: '',
                    volume: '',
                });
            } catch (error) {
                alert('오류가 발생했습니다. 관리자에게 문의바랍니다.');
            } finally {
                setLoading(false);
            }
        },

        [inputs, setInputs],
    );

    const selectAzureGubun = [
        { value: 'exchange', name: 'EXCHANGE' },
        { value: 'onedrive', name: 'ONEDIRVE' },
    ];


    return (
    <>
            <H1>계정 관리</H1>
            <DivMaxWrap>
                <form onSubmit={onSubmit}>
                    <section className="subTitleFlex">
                        <SubTitle>
                            <h1>계정 정보</h1>
                        </SubTitle>
                        <TableWrap>
                            <BorderListTable>
                                <caption>기본 정보</caption>
                                <colgroup>
                                    <col width="20%" />
                                    <col width="30%" />
                                    <col width="20%" />
                                    <col width="30%" />
                                </colgroup>
                                <tbody>
                                    <tr>
                                        <th>
                                            <span>계정 구분</span>
                                        </th>
                                        <td>
                                            <Default_Select onChange={onChange} value={auzreGubun} name="auzreGubun">
                                                {selectAzureGubun.map((it, idx) => (
                                                    <option value={it.value} key={it.value}>
                                                        {it.name}
                                                    </option>
                                                ))}
                                            </Default_Select>
                                        </td>
                                        <th>계정</th>
                                        <td>
                                            <DefaultInput
                                                type="type"
                                                value={accountId}
                                                name="accountId"
                                                onChange={onChange}
                                                title="AaccountId"
                                                ref={(el) => (inputRef.current[2] = el)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>ClientId</span>
                                        </th>
                                        <td>
                                            <DefaultInput
                                                type="type"
                                                value={clientId}
                                                name="clientId"
                                                onChange={onChange}
                                                title="ClientId"
                                                ref={(el) => (inputRef.current[3] = el)}
                                            />
                                        </td>
                                        <th>
                                            <span>TenentId</span>
                                        </th>
                                        <td>
                                            <DefaultInput
                                                type="type"
                                                value={tenentId}
                                                name="tenentId"
                                                onChange={onChange}
                                                title="TenentId"
                                                ref={(el) => (inputRef.current[4] = el)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>
                                            <span>SecretKey</span>
                                        </th>
                                        <td>
                                            <DefaultInput
                                                type="type"
                                                value={secretKey}
                                                name="secretKey"
                                                onChange={onChange}
                                                title="SecretKey"
                                                ref={(el) => (inputRef.current[5] = el)}
                                            />
                                        </td>
                                        <th>
                                            <span>토큰 요청 문자열</span>
                                        </th>
                                        <td>
                                            <DefaultInput
                                                type="type"
                                                value={tokenString}
                                                name="tokenString"
                                                onChange={onChange}
                                                title="토큰 요청 문자열"
                                                ref={(el) => (inputRef.current[6] = el)}
                                            />
                                        </td>
                                    </tr>
                                    <tr>
                                        {auzreGubun === 'exchange' && (
                      <>
                                                <th>
                                                    <span>개체 ID</span>
                                                </th>