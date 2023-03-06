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