import React from 'react'
import { Container, Title, SubTitle, ContactSubInfoContainer, ContactInfoContainer, Info, SubscribeButton, SocialContainer, SocialIcon } from './styled'
import { AccessAlarm, ThreeDRotation, SendOutlined } from '@material-ui/icons';
import { Icon, Typography } from '@material-ui/core';

const ShopFooter = () => {
    return (
        <Container>
            <Title>Products</Title>
            <SubTitle to="/">
                Price drop
            </SubTitle>
            <SubTitle to="/">
                New Products
            </SubTitle>
            <SubTitle to="/">
                Best sales
            </SubTitle>
            <SubTitle to="/">
                Contact us
            </SubTitle>
            <Title>Customer service</Title>
            <SubTitle to="/">
                Delivery
            </SubTitle>
            <SubTitle to="/">
                Legal Notice
            </SubTitle>
            <SubTitle to="/">
                About us
            </SubTitle>
            <Title>contact details</Title>
            <ContactInfoContainer>
                <AccessAlarm fontSize="small" />
                <ContactSubInfoContainer>
                    <Info variant="caption">0202 - 956 - 5 - 55</Info>
                    <Info variant="caption">0202 - 956 - 5 - 55</Info>
                </ContactSubInfoContainer>
            </ContactInfoContainer>
            <ContactInfoContainer>
                <ThreeDRotation fontSize="small" />
                <ContactSubInfoContainer>
                    <Info variant="caption">allo@maman.com</Info>
                    <Info variant="caption">asdfasdf@asdf.sd</Info>
                </ContactSubInfoContainer>
            </ContactInfoContainer>
            <ContactInfoContainer>
                <AccessAlarm fontSize="small" />
                <ContactSubInfoContainer>
                    <Info variant="caption">asdfasdfasdf</Info>
                    <Info variant="caption">asdfsd</Info>
                </ContactSubInfoContainer>
            </ContactInfoContainer>
            <Title>newsletter</Title>
            <SubscribeButton
                variant="outlined"
                endIcon={<SendOutlined fontSize="small" />}
            >
                <Typography variant="body2">
                    Your email address
                </Typography>
            </SubscribeButton>
            <Info variant="caption">Subscribe for the latest styles and sales, plus get 25% off your first order.</Info>
            <Title>social information</Title>
            <SocialContainer>
                <SocialIcon fontSize="small">
                    brush
                </SocialIcon>
                <SocialIcon fontSize="small">
                    toys
                </SocialIcon>
                <SocialIcon fontSize="small">
                    watch
                </SocialIcon>
                <SocialIcon fontSize="small">
                    nature
                </SocialIcon>
            </SocialContainer>
        </Container>
    )
}

export default ShopFooter

