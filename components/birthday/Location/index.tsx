import React from 'react'
import { Map, MapMarker, StaticMap } from 'react-kakao-maps-sdk'
import SectionLayout from '../SectionLayout'
import SectionTitle from '../common/SectionTitle'

export default function Location() {
  const lat = 37.565443365653344
  const lng = 127.19823254123826
  const text = '우설화 하남미사점'
  return (
    <SectionLayout type="location">
      <SectionTitle src={'/images/location.png'} />
      <div className="flex flex-col bg-[#fafafa] py-4 pl-4 w-full">
        <p className="font-semibold text-[1rem]">우설화 하남미사점</p>
        <p className="text-[.825rem] text-gray-500">
          경기 하남시 미사대로 430 힐스테이트에코미사 2층
        </p>
      </div>
      <div
        className="relative w-full"
        dangerouslySetInnerHTML={{
          __html: `
        <div style="font:normal normal 400 12px/normal dotum, sans-serif; width:100%; height:auto; color:#333; position:relative"><div style="height: auto;"><a href="https://map.kakao.com/?urlX=543790.0&amp;urlY=1129478.0&amp;itemId=768010783&amp;q=%EC%9A%B0%EC%84%A4%ED%99%94%20%ED%95%98%EB%82%A8%EB%AF%B8%EC%82%AC%EC%A0%90&amp;srcid=768010783&amp;map_type=TYPE_MAP&amp;from=roughmap" target="_blank"><img class="map" src="http://t1.daumcdn.net/roughmap/imgmap/d2b27b0ae76c677e0cff40ca4291c106bb0f30ad24fd393423c3d1d5f800fff5" width="100%" height="358px" style="border:1px solid #ccc;"></a></div><div style="display:none; overflow: hidden; padding: 7px 11px; border: 1px solid rgba(0, 0, 0, 0.1); border-radius: 0px 0px 2px 2px; background-color: rgb(249, 249, 249);"><a href="https://map.kakao.com" target="_blank" style="float: left;"><img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" width="72" height="16" alt="카카오맵" style="display:block;width:72px;height:16px"></a><div style="float: right ; position: relative; top: 1px; font-size: 11px;"><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;srcid=768010783&amp;confirmid=768010783&amp;q=%EC%9A%B0%EC%84%A4%ED%99%94%20%ED%95%98%EB%82%A8%EB%AF%B8%EC%82%AC%EC%A0%90&amp;rv=on" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">로드뷰</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com/?from=roughmap&amp;eName=%EC%9A%B0%EC%84%A4%ED%99%94%20%ED%95%98%EB%82%A8%EB%AF%B8%EC%82%AC%EC%A0%90&amp;eX=543790.0&amp;eY=1129478.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">길찾기</a><span style="width: 1px;padding: 0;margin: 0 8px 0 9px;height: 11px;vertical-align: top;position: relative;top: 2px;border-left: 1px solid #d0d0d0;float: left;"></span><a target="_blank" href="https://map.kakao.com?map_type=TYPE_MAP&amp;from=roughmap&amp;srcid=768010783&amp;itemId=768010783&amp;q=%EC%9A%B0%EC%84%A4%ED%99%94%20%ED%95%98%EB%82%A8%EB%AF%B8%EC%82%AC%EC%A0%90&amp;urlX=543790.0&amp;urlY=1129478.0" style="float:left;height:15px;padding-top:1px;line-height:15px;color:#000;text-decoration: none;">지도 크게 보기</a></div></div></div>`,
        }}
      ></div>
    </SectionLayout>
  )
}
