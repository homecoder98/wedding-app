import Section from '../shared/Section'
import '@/styles/Intro.css'
import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import Text from '@/components/shared/Text'

interface IntroProps {
  groomName: string
  brideName: string
  locationName: string
  date: string
  message: string
}

function Intro({
  groomName,
  brideName,
  locationName,
  date,
  message,
}: IntroProps) {
  return (
    <>
      <Section>
        <div className="wrap-persons">
          <span>{groomName}</span>
          <HeartIcon />
          <span>{brideName}</span>
        </div>

        <div className="wrap-location">
          <span>
            {format(parseISO(date), 'yyyy년 M월 d일 eeee', { locale: ko })}
          </span>
          <span>{locationName}</span>
          <FlowerIcon />
          <Text>{message}</Text>
        </div>
      </Section>
    </>
  )
}

function HeartIcon() {
  return (
    <svg
      id="Outlined"
      version="1.1"
      viewBox="0 0 128 128"
      xmlns="http://www.w3.org/2000/svg"
      className="icon-heart"
    >
      <path d="M109.2,27.8c-0.2-0.8-0.8-1.5-1.6-1.8l-23.8-7.1c-0.7-0.2-1.5-0.1-2.1,0.4L64,32.5L46.4,19.3  c-0.6-0.5-1.4-0.6-2.1-0.4L20.5,26c-0.8,0.2-1.5,0.9-1.6,1.8l-4.8,21.4c-0.1,0.5,0,1.1,0.2,1.6l14.3,28.6c0.1,0.2,0.3,0.4,0.4,0.6  l14.3,14.3c0.1,0.1,0.2,0.2,0.3,0.2l19,14.3c0.4,0.3,0.9,0.5,1.4,0.5c0.5,0,1-0.2,1.4-0.5l19-14.3c0.1-0.1,0.2-0.1,0.3-0.2L99,80  c0.2-0.2,0.3-0.4,0.4-0.6l14.3-28.6c0.2-0.5,0.3-1,0.2-1.6L109.2,27.8z M95.4,76.9L81.5,90.8L64,103.9L46.5,90.8L32.6,76.9l-2.9-5.7  h12.8c0.9,0,1.7-0.5,2.1-1.3l2.7-5.2l3,5.3c0.4,0.8,1.3,1.2,2.2,1.2c0.9-0.1,1.7-0.6,2-1.4l6.5-15.3l7.3,26.7c0.3,1,1.1,1.7,2.2,1.7  c0,0,0.1,0,0.1,0c1,0,1.9-0.6,2.2-1.5l4-10.2h21.2L95.4,76.9z M100.6,66.4H75.4c-1,0-1.9,0.6-2.2,1.5l-2,5L64,46.6  c-0.3-1-1.1-1.7-2.1-1.7c-1.1-0.1-2,0.5-2.3,1.4l-7.3,17.1l-2.8-4.9c-0.4-0.7-1.2-1.2-2.1-1.2c0,0,0,0,0,0c-0.9,0-1.7,0.5-2.1,1.3  l-4.1,7.8H27.4l-8.5-17l4.3-19.2l21.3-6.4l18.1,13.6c0.8,0.6,2,0.6,2.9,0l18.1-13.6l21.3,6.4l4.3,19.2L100.6,66.4z" />
    </svg>
  )
}

function FlowerIcon() {
  return (
    <svg
      className="icon-flower"
      id="Layer_1"
      version="1.1"
      viewBox="0 0 30 30"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M447.894,207.354" />
      <path d="M456.389,198.592c0,0-1.19-1.19-4.212,0c0,0-5.861-5.448-11.538,1.282c0,0-8.012-0.183-7.6,7.417  c0,0-9.478,5.54,0.504,10.027c0,0,4.395,6.685,10.256,1.557c0,0,7.509,5.586,10.256-0.824c0,0,6.227,7.326,9.981,0.275  c0,0,6.685,6.501,11.629-0.641c0,0,12.091,4.53,11.355-9.731c0,0-2.198-4.005-5.036-3.73c0,0-1.74-9.615-8.791-7.142  c0,0-8.516-4.212-12.362,1.19C460.83,198.272,457.382,198.106,456.389,198.592z" />
      <path d="M462.395,200.646c0,0,4.891-6.325,9.298,0c0,0,6.838-2.806,8.459,4.196c0.101,0.435,0,1.786,0,1.786  s3.022-0.069,4.739,2.335c0,0,1.648,8.104-8.104,7.211c0,0,0.036-0.57-2.974,2.383l1.852-0.873c0,0,7.917,3.022,11.387-4.327  c0,0,1.959-6.387-4.359-9.134c0,0-2.083-9.546-10.382-7.005c0,0-6.444-4.876-11.046,0.893c0,0-2.678,1.292,0.824,2.535" />
      <path d="M454.02,201.805c0,0-5.002-7.52-9.409-0.939c0,0-6.726-1.981-8.348,5.305c-0.101,0.453,0,1.858,0,1.858  s-3.421-0.391-4.229,2.533c-0.807,2.918-0.129,6.035,9.658,6.478c0.88,0.04,5.185,0.973,0.911,3.402c0,0-0.538-0.348-0.739-0.414  c-3.054-1.017-7.005-0.927-11.69-5.391c0,0-0.932-5.626,3.62-7.978c0,0-0.137-7.337,10.31-8.421c0,0,0.61-4.583,13.693,0.98  c0,0,0.031,1.293-3.471,2.586" />
      <ellipse cx="468.287" cy="202.789" rx="11.538" ry="6.288" />
      <path d="M453.524,203.267c-2.015,1.899-4.165,5.453-9.304,5.453s-9.304-2.441-9.304-5.453  c0-1.815,2.792-2.729,5.723-4.033c1.934-0.86,3.635-2.503,5.677-2.503C451.455,196.73,456.079,200.859,453.524,203.267z" />
      <path d="M486.513,206.083c-0.927-1.055-1.867-1.767-2.96-2.242c-0.2-0.086-0.401-0.162-0.607-0.229  c-0.564-2.941-1.856-5.064-3.85-6.311c-1.912-1.199-3.968-1.531-6.076-0.942c-0.725-0.672-1.567-1.218-2.462-1.595  c-2.402-1.011-5.142-0.754-7.522,0.696c-0.266,0.163-0.522,0.34-0.723,0.502c-0.76,0.533-1.406,1.203-1.893,1.959  c-0.547-0.068-1.1-0.083-1.685-0.047c-0.356,0.022-0.711,0.091-1.069,0.183c-1.679-0.891-3.461-1.122-5.28-0.618  c-0.694-0.638-1.496-1.158-2.346-1.515c-2.303-0.969-4.936-0.725-7.224,0.669c-0.255,0.155-0.499,0.325-0.693,0.48  c-0.724,0.508-1.339,1.145-1.805,1.864c-0.52-0.064-1.039-0.077-1.594-0.043c-1.002,0.061-1.988,0.403-3.103,1.074  c-1.453,0.876-2.538,2.413-3.138,4.448c-0.205,0.696-0.296,1.459-0.27,2.242c-1.261,0.403-2.368,1.195-3.112,2.244  c-1.852,2.614-1.579,6.073,0.635,8.046c1.068,0.952,2.462,1.451,3.98,1.372c0.954,1.484,2.315,2.565,3.803,3.004  c1.287,0.378,2.42,0.45,3.469,0.221c1.19-0.261,2.226-0.786,3.152-1.599c1.374,1.15,3.248,1.805,5.119,1.805  c0.403,0,0.806-0.03,1.204-0.093c1.572-0.247,3.051-0.961,4.279-2.065c0.812,0.786,1.741,1.383,2.74,1.676  c1.34,0.395,2.522,0.471,3.61,0.231c1.251-0.273,2.339-0.827,3.307-1.687c1.434,1.212,3.397,1.902,5.359,1.902  c0.421,0,0.839-0.031,1.253-0.097c1.919-0.3,3.696-1.269,5.069-2.754c2.938,1.219,6.466,0.786,8.812-1.141  c1.803-1.479,2.994-3.512,3.271-5.579C488.472,209.838,487.871,207.63,486.513,206.083z M450.19,219.922  c-1.926,0.297-4-0.348-5.421-1.802c-0.171-0.181-0.476-0.215-0.724-0.206c-0.249,0.005-0.548,0.187-0.711,0.376  c-0.798,0.818-1.663,1.306-2.721,1.539c-0.752,0.163-1.602,0.1-2.597-0.191c-1.208-0.356-2.323-1.327-3.057-2.666  c-0.176-0.321-0.525-0.509-0.895-0.447c-1.183,0.17-2.334-0.153-3.157-0.889c-1.76-1.569-1.504-4.116-0.371-5.716  c0.631-0.89,1.642-1.518,2.774-1.727c0.46-0.085,0.774-0.516,0.713-0.98c-0.106-0.811-0.056-1.605,0.149-2.3  c0.329-1.119,1.007-2.625,2.359-3.438c0.863-0.52,1.595-0.782,2.303-0.825c0.621-0.035,1.189-0.003,1.775,0.113  c0.39,0.078,0.775-0.114,0.953-0.464c0.355-0.695,0.898-1.313,1.611-1.815c0.179-0.141,0.365-0.27,0.559-0.388  c1.801-1.097,3.853-1.298,5.628-0.55c0.795,0.335,1.539,0.852,2.15,1.497c0.239,0.252,0.7,0.305,1.024,0.188  c0.956-0.34,1.914-0.369,2.865-0.152c-1.453,0.923-2.548,2.484-3.157,4.548c-0.216,0.734-0.31,1.54-0.28,2.364  c-1.324,0.416-2.487,1.245-3.265,2.344c-1.926,2.717-1.643,6.314,0.659,8.366c1.116,0.995,2.61,1.491,4.158,1.424  c0.03,0.048,0.069,0.086,0.1,0.133c-0.009,0.008-0.021,0.01-0.03,0.018C452.604,219.157,451.431,219.727,450.19,219.922z   M486.42,211.911c-0.219,1.631-1.183,3.255-2.644,4.454c-1.987,1.628-5.084,1.896-7.527,0.642c-0.365-0.189-0.826-0.096-1.088,0.233  c-1.15,1.437-2.721,2.375-4.421,2.642c-2.045,0.313-4.217-0.367-5.713-1.899c-0.157-0.167-0.429-0.204-0.665-0.204  c-0.021,0-0.043,0-0.062,0.001c-0.251,0.006-0.552,0.191-0.715,0.381c-0.843,0.864-1.756,1.379-2.869,1.623  c-0.792,0.174-1.689,0.108-2.737-0.201c-1.275-0.374-2.451-1.398-3.225-2.809c-0.175-0.321-0.524-0.499-0.895-0.447  c-1.257,0.175-2.468-0.164-3.336-0.938c-1.86-1.659-1.591-4.349-0.394-6.038c0.665-0.939,1.733-1.604,2.928-1.823  c0.46-0.085,0.775-0.516,0.713-0.981c-0.114-0.853-0.059-1.691,0.157-2.422c0.347-1.178,1.06-2.763,2.487-3.624  c0.906-0.546,1.677-0.822,2.428-0.868c0.654-0.044,1.251-0.003,1.867,0.118c0.401,0.077,0.775-0.114,0.953-0.463  c0.376-0.734,0.949-1.386,1.7-1.914c0.187-0.148,0.382-0.284,0.588-0.409c1.897-1.155,4.056-1.367,5.926-0.578  c0.841,0.354,1.625,0.898,2.262,1.575c0.238,0.251,0.702,0.3,1.03,0.188c1.661-0.588,3.385-0.367,4.996,0.643  c1.663,1.043,2.721,2.946,3.142,5.654c0.056,0.354,0.32,0.64,0.67,0.721c0.298,0.07,0.592,0.164,0.878,0.288  c0.856,0.372,1.577,0.924,2.337,1.79C486.214,208.408,486.663,210.109,486.42,211.911z" />
      <g>
        <path d="M12.912,8.286c0,0-0.249-6.301,5.559-4.789c0,0-3.115-2.934-5.561-0.234   C12.911,3.263,10.547,5.755,12.912,8.286z" />
        <g>
          <path d="M22.434,8.972c0,0-1.068,7.395-4.672,9.349c0,0-4.318,0.71-6.17-4.891l-0.826-2.65l-1.388-0.648    c0,0-1.785-1.649,0.393-3.952c0,0-1.392-4.294,3.738-3.641c0,0,2.548-0.902,3.03-1.867l2.224,1.369c0,0,1.742,0.871,2.116,2.303    c0,0,3.161-0.533,3.292,1.974C24.17,6.318,24.394,7.936,22.434,8.972z" />
          <path d="M19.587,17.102c0.311-0.311,1.525-3.578,4.761-2.303l-4.45,2.707L19.587,17.102z" />
          <path d="M24.17,14.268l-4.85,2.694C19.32,16.962,21.967,14.057,24.17,14.268z" />
          <path d="M13.508,17.117c-0.286-0.224-1.607-2.779-4.131-1.411l3.916,1.773L13.508,17.117z" />
          <path d="M9.47,15.252l4.243,1.723C13.713,16.975,11.253,14.859,9.47,15.252z" />
          <path d="M16.661,18.321c-0.14-0.382-1.616-1.252-0.511-4.457l1.183,4.338L16.661,18.321z" />
          <path d="M17.163,18.014l-1.051-4.028C16.112,13.986,18.185,16.224,17.163,18.014z" />
          <path d="M14.904,24.176c0,0,0.996-4.065-3.153-6.015l-1.867-0.373l-0.507,0.373l-1.236-0.285l-0.29,0.705    l-0.913-0.171L6.357,18.58l-0.871,0.576c0,0-0.166,0.415-0.29,0.415s-1.12,0-1.12,0l-0.456,0.29L2.54,19.944h-0.83l1.66,1.805    l0.788,0.519L4.2,22.599l1.535,0.916l0.041,0.66l0.871,0.373l0.29,0.249l0.664,0.484h0.207l0.083,0.374l0.871,0.304    C8.764,25.96,12.829,25.794,14.904,24.176z" />
          <path d="M14.738,23.885c0,0-3.485-0.913-4.647-0.747c0,0-3.745-0.851-4.972-2.356l-2.911-0.573l2.78,3.054    c0,0,2.661,3.402,6.454,2.697C11.442,25.96,13.784,25.503,14.738,23.885z" />
          <path d="M27.62,17.963l-9.667,6.172C17.953,24.134,15.569,17.018,27.62,17.963z" />
          <path d="M28.035,17.788c0,0-2.572,9.375-9.729,6.45l-0.643,0.166l0.29-0.27l10.268-6.627L28.035,17.788z" />
          <path d="M13.049,8.029c0,0,5.926,2.156,6.255-3.837c0,0,1.846,3.86-1.471,5.368    C17.833,9.56,14.739,11.052,13.049,8.029z" />
          <path d="M11.056,11.712l-0.29-0.932c0,0,3.392,2.024,3.703,5.853c0,0,0.156,0.718-0.311,0.874    C14.157,17.507,11.004,13.448,11.056,11.712z" />
          <path d="M21.39,11.662l0.182-0.959c0,0-3.139,2.397-3.012,6.237c0,0-0.073,0.731,0.409,0.832    C18.969,17.773,21.639,13.38,21.39,11.662z" />
          <ellipse cx="16.538" cy="6.588" rx="5.034" ry="3.334" />
          <path d="M28.405,17.13c-0.117-0.088-0.278-0.094-0.401-0.016c-0.375,0.242-1.784,0.328-3.027,0.403    c-1.162,0.071-2.363,0.144-3.165,0.342c-1.836,0.455-3.117,1.32-3.808,2.57c-0.791,1.435-0.566,2.931-0.425,3.536    c-0.335,0.183-0.666,0.354-0.993,0.517c0.476-1.912,0.886-4.026,0.936-5.749c0.055-0.015,0.101-0.04,0.142-0.079    c0.963-0.004,2.323-0.847,3.848-1.793c1.424-0.882,3.192-1.978,3.782-1.636c0.161,0.094,0.375,0.042,0.474-0.122    c0.098-0.164,0.047-0.376-0.116-0.476c-1.101-0.676-2.179-0.89-3.21-0.632c-0.413,0.103-0.778,0.273-1.097,0.472    c0.205-0.574,0.353-1.147,0.466-1.67c0.329-1.514,0.981-3.296,1.184-3.835c0.192-0.11,0.37-0.23,0.545-0.364    c0.992-0.765,1.138-1.641,1.085-2.241c-0.1-1.15-0.967-2.003-1.489-2.27c-0.57-0.292-1.394-0.256-2.069-0.151    c-0.309-0.709-0.827-1.534-1.645-1.926c-0.026-0.013-0.054-0.022-0.083-0.028c-0.92-0.183-2.009-1.309-2.367-1.679    c0,0-0.045-0.046-0.045-0.046c-0.131-0.135-0.355-0.134-0.494-0.007c-1.631,1.478-2.421,1.904-2.855,2.022    c-0.016,0.007-0.032,0.015-0.048,0.022c-0.007-0.003-0.013-0.006-0.019-0.01c-0.805-0.396-2.644-0.672-3.867,1.109    c-0.467,0.68-0.611,1.498-0.417,2.365C9.26,5.895,9.299,6.03,9.346,6.165c-0.564,0.554-0.869,1.54-0.921,2.343    c-0.081,1.227,0.394,2.093,1.269,2.317c0.228,0.058,0.462,0.115,0.7,0.17c0.169,0.419,0.536,1.356,0.981,2.627    c0.13,0.371,0.289,0.825,0.497,1.303c-0.273-0.118-0.581-0.207-0.922-0.235c-0.954-0.079-1.899,0.328-2.817,1.208    c-0.139,0.132-0.144,0.352-0.012,0.491c0.131,0.14,0.351,0.145,0.491,0.016c0.482-0.457,2.537,0.441,4.035,1.094    c1.523,0.664,2.899,1.264,3.85,1.264c0.121,0,0.222-0.03,0.329-0.05c-0.048,1.639-0.446,3.684-0.909,5.552    c-0.243-0.182-0.484-0.343-0.723-0.48c0.706-4.166-3.527-5.812-3.538-5.812c-0.426-0.242-1.684-0.577-1.826-0.615    c-0.114-0.03-0.231-0.002-0.318,0.075c-0.068,0.06-0.11,0.143-0.118,0.231l-0.508-0.051c-0.487-0.12-0.856-0.058-1.09,0.176    c-0.083,0.083-0.138,0.175-0.172,0.268c-0.372-0.053-0.715,0.08-0.888,0.162c-0.629,0.016-1.072,0.187-1.319,0.509    c-0.104,0.135-0.156,0.274-0.179,0.398l-1.344,0.153c-0.121,0.014-0.226,0.089-0.277,0.199L3.57,19.575    c-0.303,0.098-1.084,0.056-1.702-0.055c-0.138-0.024-0.276,0.035-0.353,0.152c-0.077,0.117-0.076,0.268,0.001,0.384    c0.7,1.053,1.697,1.929,2.187,2.328c-0.007,0.078,0.013,0.157,0.056,0.224c0.261,0.395,1.021,0.94,1.537,1.284    c-0.01,0.019-0.018,0.04-0.023,0.061c-0.03,0.106-0.007,0.22,0.06,0.307c0.225,0.29,0.647,0.489,0.991,0.613    c0.014,0.037,0.034,0.072,0.06,0.103c0.229,0.271,0.667,0.461,1.041,0.581c-0.012,0.041-0.016,0.086-0.012,0.129    c0.012,0.119,0.083,0.223,0.188,0.277c0.253,0.129,0.526,0.175,0.766,0.183c0.054,0.054,0.126,0.09,0.206,0.1l0.35,0.041    c0.326,0.05,0.647,0.072,0.959,0.072c2.815,0,4.98-1.793,5.099-1.892c0.248,0.151,0.497,0.319,0.747,0.525    c-0.633,2.412-1.305,4.354-1.318,4.391c-0.063,0.182,0.033,0.38,0.214,0.443c0.038,0.014,0.077,0.019,0.115,0.019    c0.144,0,0.279-0.089,0.329-0.233c0.052-0.148,0.683-1.969,1.294-4.265c0.03-0.005,0.06-0.006,0.089-0.02    c0.499-0.237,1.015-0.504,1.536-0.79c0.946,0.55,1.882,0.758,2.731,0.758c2.008,0,3.533-1.084,3.558-1.103    c2.792-2.173,4.19-6.496,4.248-6.679C28.569,17.372,28.522,17.22,28.405,17.13z M9.278,25.629    c-0.001-0.004-0.002-0.007-0.004-0.011c-0.062-0.168-0.239-0.264-0.415-0.217c-0.003,0.001-0.179,0.045-0.401,0.047    c0.011-0.05,0.01-0.102-0.002-0.155c-0.032-0.132-0.138-0.234-0.272-0.261c-0.266-0.052-0.634-0.157-0.913-0.282    c0.004-0.023,0.006-0.047,0.006-0.071c-0.002-0.162-0.116-0.302-0.275-0.336c-0.173-0.038-0.481-0.129-0.738-0.251    c0.029-0.046,0.047-0.098,0.053-0.154c0.012-0.132-0.052-0.261-0.165-0.33c-0.474-0.29-1.232-0.805-1.616-1.17    c0.009-0.027,0.014-0.055,0.016-0.084c0.008-0.12-0.045-0.234-0.141-0.305c-0.012-0.009-0.997-0.739-1.83-1.739    c0.513,0.039,1.111,0.025,1.439-0.18c0.057-0.036,0.103-0.088,0.131-0.149l1.471-0.2c0.097-0.011,0.184-0.068,0.242-0.147    c0.057-0.079,0.078-0.184,0.058-0.28c-0.002-0.012-0.021-0.118,0.054-0.211C6.092,19,6.401,18.916,6.821,18.914    c0.056,0,0.118-0.018,0.168-0.044c0.077-0.04,0.473-0.233,0.744-0.048c0.119,0.081,0.276,0.08,0.394-0.001    c0.119-0.082,0.175-0.228,0.141-0.368c-0.008-0.036-0.01-0.144,0.019-0.173c0.021-0.021,0.143-0.062,0.48,0.016l0.982,0.102    c0.108,0.017,0.211-0.026,0.285-0.102c0.038-0.039,0.066-0.086,0.083-0.136c0.472,0.137,1.015,0.314,1.245,0.44    c0.157,0.058,3.62,1.397,3.182,4.85c-0.806-0.357-1.528-0.501-2.03-0.552l-1.889-2.147c-0.126-0.143-0.347-0.158-0.492-0.031    c-0.145,0.127-0.159,0.347-0.032,0.492l1.432,1.627c-1.052-0.065-1.953-0.23-2.712-0.442l-1.463-1.999    c-0.112-0.156-0.332-0.191-0.487-0.075c-0.156,0.114-0.189,0.332-0.075,0.487l0.876,1.197c-1.393-0.569-2.049-1.21-2.06-1.221    c-0.136-0.137-0.356-0.14-0.493-0.004c-0.137,0.135-0.14,0.354-0.005,0.492c0.049,0.05,0.745,0.741,2.208,1.352l-0.713,0.116    c-0.19,0.031-0.319,0.21-0.288,0.401c0.028,0.17,0.176,0.292,0.344,0.292c0.018,0,0.037-0.001,0.056-0.004l1.991-0.324    c0.006-0.001,0.011-0.006,0.017-0.007c0.648,0.174,1.39,0.314,2.23,0.394l-1.88,0.826c-0.176,0.077-0.256,0.283-0.179,0.459    c0.057,0.13,0.185,0.208,0.319,0.208c0.047,0,0.095-0.009,0.14-0.029l3.105-1.364c0.456,0.048,1.11,0.182,1.84,0.512    C13.656,24.577,11.639,25.871,9.278,25.629z M17.252,17.698c-0.003,0.001-0.005,0.002-0.008,0.003    c-0.027,0-0.056,0.003-0.085,0.011c-0.135,0.019-0.26,0.016-0.391,0.024c-0.265-0.689-0.559-1.859-0.609-3.021    C16.694,15.425,17.379,16.587,17.252,17.698z M20.403,16.364c0.008-0.013,0.802-1.342,2.208-1.693    c0.457-0.115,0.933-0.112,1.426,0.009c-0.83,0.31-1.82,0.924-2.892,1.589c-0.492,0.305-1.023,0.632-1.533,0.919    c0.238-0.216,0.453-0.447,0.644-0.694C20.315,16.464,20.368,16.424,20.403,16.364z M21.131,12.649    c-0.365,1.684-1.103,3.913-3.165,4.798c0.003-0.421-0.074-0.835-0.204-1.229c0.002-0.004,0.006-0.006,0.008-0.011    c0.347-1.044,0.215-2.378,0.101-3.109c0.025-0.02,0.051-0.039,0.07-0.066c0.667-0.959,2.59-3.295,4.225-3.833    C21.878,9.998,21.4,11.406,21.131,12.649z M16.664,0.982c0.666,0.669,1.583,1.472,2.494,1.674c0.733,0.374,1.172,1.283,1.37,1.797    c0.06,0.157,0.219,0.249,0.391,0.217c0.842-0.163,1.534-0.151,1.901,0.037c0.406,0.208,1.041,0.896,1.112,1.71    c0.054,0.621-0.221,1.169-0.817,1.629c-0.175,0.135-0.356,0.252-0.553,0.359c-0.187,0.019-0.375,0.058-0.565,0.117    c0.168-0.779,0.092-1.463-0.237-2.036c-0.516-0.897-1.483-1.243-1.918-1.358c-0.073-0.301-0.168-0.597-0.311-0.88    c-0.587-1.165-1.56-1.991-2.736-2.327C16.44,1.82,16.08,1.784,15.719,1.778C16.011,1.546,16.323,1.284,16.664,0.982z M15.91,9.355    c-0.609-0.174-1.111-0.599-1.414-1.2c-0.486-0.962-0.149-2.192,0.749-2.741c0.317-0.194,0.68-0.246,1.023-0.149    c0.356,0.101,0.65,0.351,0.827,0.704c0.282,0.559,0.088,1.273-0.433,1.591c-0.172,0.105-0.37,0.133-0.555,0.082    c-0.194-0.055-0.354-0.193-0.452-0.386c-0.149-0.296-0.044-0.687,0.23-0.855c0.123-0.075,0.267-0.065,0.374,0.025    c0.15,0.123,0.369,0.106,0.491-0.043c0.124-0.147,0.105-0.367-0.042-0.491c-0.339-0.285-0.805-0.319-1.187-0.086    c-0.581,0.355-0.8,1.146-0.489,1.763c0.187,0.37,0.5,0.633,0.882,0.742c0.374,0.108,0.77,0.052,1.11-0.157    c0.823-0.503,1.133-1.625,0.691-2.5c-0.266-0.528-0.714-0.905-1.259-1.06c-0.531-0.152-1.092-0.072-1.577,0.225    c-1.201,0.734-1.653,2.371-1.008,3.65c0.01,0.02,0.025,0.036,0.036,0.056c-1.15-0.83-1.759-1.711-1.796-2.628    c-0.057-1.394,1.194-2.528,1.643-2.89c0.889-0.537,1.898-0.686,2.846-0.415c0.988,0.282,1.807,0.982,2.305,1.971    c0.803,1.593,0.246,3.628-1.244,4.538C17.12,9.432,16.496,9.52,15.91,9.355z M10.221,3.789c0.581-0.847,1.335-1.1,1.972-1.1    c0.28,0,0.519,0.056,0.73,0.125c-0.644,0.611-1.561,1.723-1.506,3.108c0.035,0.887,0.471,1.726,1.287,2.51    c-1.558-0.898-2.483-2.113-2.632-2.32c-0.067-0.167-0.124-0.336-0.163-0.506C9.758,4.933,9.866,4.305,10.221,3.789z M9.12,8.553    c0.045-0.688,0.288-1.353,0.604-1.749c0.718,0.894,2.941,3.258,6.417,3.302c0.002,0,0.004,0,0.005,0    c0.023,0,0.043-0.009,0.064-0.013c0.097,0.01,0.193,0.041,0.29,0.041c0.528,0,1.053-0.149,1.529-0.439    c1.301-0.795,2.003-2.303,1.925-3.8c0.379,0.141,0.904,0.418,1.203,0.938c0.305,0.531,0.302,1.225,0.009,2.056    c-1.563,0.885-3.017,2.695-3.567,3.43c-2.849-2.391-6.373-2.051-6.932-1.979c-0.271-0.062-0.541-0.126-0.8-0.192    C9.342,10.015,9.063,9.419,9.12,8.553z M11.146,11c1.046-0.06,3.753-0.001,5.972,1.839c0.066,0.336,0.231,1.334,0.149,2.285    c-0.518-0.901-1.139-1.535-1.191-1.588c-0.096-0.096-0.238-0.128-0.366-0.081s-0.216,0.162-0.228,0.297    c-0.122,1.396,0.204,2.969,0.545,3.972c-0.142-0.014-0.288-0.019-0.422-0.049c-2.247-0.489-3.11-2.958-3.573-4.285    C11.659,12.325,11.342,11.496,11.146,11z M9.644,15.65c0.418-0.21,0.832-0.301,1.243-0.266c0.949,0.074,1.607,0.788,1.755,0.963    c0.139,0.204,0.293,0.401,0.46,0.589c-0.058-0.025-0.12-0.052-0.176-0.076C11.685,16.318,10.543,15.821,9.644,15.65z     M23.86,23.634c-0.027,0.018-2.53,1.742-5.156,0.499c0.51-0.294,1.019-0.6,1.518-0.91c0.233-0.045,1.844-0.323,3.098,0.165    c0.042,0.017,0.085,0.023,0.126,0.023c0.139,0,0.271-0.084,0.325-0.222c0.07-0.18-0.019-0.381-0.198-0.451    c-0.684-0.266-1.439-0.332-2.08-0.326c0.343-0.224,0.677-0.445,0.994-0.659c0.006-0.001,0.012,0.003,0.019,0.001    c0.017-0.005,1.607-0.354,2.59,0.114c0.048,0.023,0.099,0.034,0.15,0.034c0.13,0,0.255-0.073,0.314-0.198    c0.084-0.173,0.01-0.381-0.164-0.464c-0.525-0.252-1.159-0.315-1.715-0.308c1.19-0.833,1.981-1.429,2.001-1.444    c0.153-0.117,0.183-0.335,0.067-0.489c-0.117-0.154-0.335-0.182-0.489-0.067c-0.019,0.014-0.733,0.554-1.825,1.322    c0.198-0.412,0.382-0.841,0.462-1.168c0.046-0.187-0.068-0.375-0.256-0.421c-0.182-0.046-0.375,0.068-0.421,0.256    c-0.155,0.631-0.797,1.798-1.014,2.182c-0.355,0.241-0.733,0.491-1.122,0.745c0.303-0.58,0.616-1.241,0.725-1.69    c0.046-0.187-0.069-0.375-0.256-0.421c-0.192-0.047-0.375,0.069-0.421,0.256c-0.183,0.749-1.074,2.29-1.28,2.64    c-0.536,0.333-1.083,0.66-1.631,0.973c-0.109-0.606-0.201-1.766,0.398-2.847c0.594-1.071,1.725-1.818,3.361-2.224    c0.741-0.184,1.91-0.255,3.04-0.323c1.018-0.062,1.943-0.118,2.601-0.251C27.121,19.247,25.848,22.087,23.86,23.634z" />
        </g>
      </g>
    </svg>
  )
}

export default Intro
